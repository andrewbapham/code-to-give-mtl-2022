from django.urls import path
from . import views

urlpatterns = [
    path('home/',views.home_page),
    path('verify/',views.authenticate_from_firebase)
]