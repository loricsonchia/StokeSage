from fastapi import FastAPI, HTTPException
from pydantic import BaseModel
import firebase_admin
from firebase_admin import credentials, firestore, auth
from fastapi.middleware.cors import CORSMiddleware
import os
from dotenv import load_dotenv
# import yfinance as yf


load_dotenv()

app = FastAPI()

# Initialize Firebase Admin SDK
cred_path = os.getenv("firebaseCredential")
cred = credentials.Certificate(cred_path)
firebase_admin.initialize_app(cred)

db = firestore.client()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

class UserLogin(BaseModel):
    email: str
    password: str

class UserSignup(BaseModel):
    email: str
    password: str

@app.post("/signup")
async def signup(user: UserSignup):
    try:
        print(f"Attempting to create user with email: {user.email}")
        user_record = auth.create_user(
            email=user.email,
            password=user.password
        )
        print(f"User created successfully with UID: {user_record.uid}")
        return {"message": "User created successfully", "uid": user_record.uid}
    except Exception as e:
        print(f"Error creating user: {str(e)}")
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
    

# @app.post("/predict")
# async def predict():
#     try:
