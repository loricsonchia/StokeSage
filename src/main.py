from fastapi import FastAPI, HTTPException
from pydantic import BaseModel
import firebase_admin
from firebase_admin import credentials, firestore, auth
import os
from dotenv import load_dotenv

load_dotenv()

app = FastAPI()

# Initialize Firebase Admin SDK
cred_path = os.getenv("firebaseCredential")
cred = credentials.Certificate(cred_path)
firebase_admin.initialize_app(cred)

db = firestore.client()

class UserLogin(BaseModel):
    email: str
    password: str

class UserSignup(BaseModel):
    email: str
    password: str
    name: str

@app.post("/signup")
async def signup(user: UserSignup):
    try:
        # Create user in Firebase Authentication
        user_record = auth.create_user(
            email=user.email,
            password=user.password
        )
        
        # Store additional user data in Firestore
        user_data = {
            "name": user.name,
            "email": user.email
        }
        db.collection('users').document(user_record.uid).set(user_data)
        
        return {"message": "User created successfully", "uid": user_record.uid}
    except Exception as e:
        raise HTTPException(status_code=400, detail=str(e))

@app.post("/login")
async def login(user: UserLogin):
    try:
        # Authenticate user with Firebase
        user_record = auth.get_user_by_email(user.email)
        
        # Query Firestore for additional user details
        user_doc_ref = db.collection('users').document(user_record.uid)
        user_doc = user_doc_ref.get()
        
        if user_doc.exists:
            user_data = user_doc.to_dict()
            return {"uid": user_record.uid, "email": user_record.email, **user_data}
        else:
            raise HTTPException(status_code=404, detail="User not found")
    except Exception as e:
        raise HTTPException(status_code=400, detail=str(e))