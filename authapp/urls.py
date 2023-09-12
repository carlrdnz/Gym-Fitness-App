from django.urls import path
from authapp import views

urlpatterns = [
    path('',views.Home, name="Home"),
    path('signup', views.signup, name="signup"),
    path('login', views.handleLogin, name="handleLogin"),
    path('logout', views.handleLogout, name="handleLogout"),
    path('contact', views.contact, name="contact"),
]
