from django.contrib import admin
from django.urls import path
from mysite import views

urlpatterns = [
    path('',views.index,name="index"),
    path('usersAPI',views.Users_API,name="index"),
]