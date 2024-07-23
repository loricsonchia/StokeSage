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

# Define UserLogin model
class UserLogin(BaseModel):
    email: str
    password: str

@app.post("/login")
async def login(user: UserLogin):
    try:
        # Use Firebase Authentication to get user details
        user_record = auth.get_user_by_email(user.email)
        
        # Query Firestore for additional user details
        user_doc_ref = db.collection('users').document(user_record.uid)
        user_doc = user_doc_ref.get()
        
        if user_doc.exists:
            user_data = user_doc.to_dict()
            return {"uid": user_record.uid, "email": user_record.email, **user_data}
        else:
            raise HTTPException(status_code=404, detail="User not found in Firestore")
    
    except Exception as e:
        raise HTTPException(status_code=400, detail="Fail from login routes")
    
# app.post("/future")
# async def future():
#     try:
#         #load model

#     except Exception as e:
#         raise HTTPException(status_code=400, detail="Fail from future routes")