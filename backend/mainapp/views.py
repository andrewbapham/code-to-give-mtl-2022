from django.shortcuts import render
from django.http import JsonResponse
from django.conf import settings
import firebase_admin
from firebase_admin import credentials
from firebase_admin import auth
import pyrebase
from decouple import config


#Firebase Configs

firebase_config ={
    "apiKey": config('API_KEY'),
    "authDomain":  config('AUTH_DOMAIN'),
    "projectId":  config('PROJECT_ID'),
    "databaseURL":  config('DB_URL'),
    "storageBucket":  config('STORAGE_BUCKET'),
    "messagingSenderId":  config('MESSAGING_SENDER_ID'),
    "appId":  config('APP_ID'),
    "measurementId":  config('MEASUREMENT_ID')
}

# Initialize Firebase - Real Time Database
firebase = pyrebase.initialize_app(firebase_config)
db = firebase.database()

# Initialize Firebase - Authentication
firebase_creds = credentials.Certificate(settings.FIREBASE_CONFIG)
firebase_app = firebase_admin.initialize_app(firebase_creds)

# Create your views here.
def home_page(request):
    user_type = db.child('User').child('Type').get().val()
    return JsonResponse({"UserType": user_type})

# Authentication
def authenticate_from_firebase(request):
    authorization_header = request.META.get('HTTP_AUTHORIZATION')
    response_object = None
    
    if not authorization_header:
        response_object = {"Verified": False}
        return JsonResponse(response_object)

    token = authorization_header.replace("Bearer ","")
    decoded_token = None

    try:
        decoded_token = auth.verify_id_token(token)
    except Exception:
        response_object = {"Verified": False}
        return JsonResponse(response_object)
    
    try:
        firebase_user_id = decoded_token['user_id']
    except Exception:
            response_object = {"Verified": False}
            return JsonResponse(response_object)
    
    response_object = {"Verified": True}

    return JsonResponse(response_object)