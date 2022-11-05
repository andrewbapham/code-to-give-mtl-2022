from django.shortcuts import render
from django.http import JsonResponse
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

# Initialize Firebase
firebase = pyrebase.initialize_app(firebase_config)
auth = firebase.auth()
db = firebase.database()

# Create your views here.
def home_page(request):
    user_type = db.child('User').child('Type').get().val()
    return JsonResponse({"UserType": user_type})