from django.urls import path
from authapp import views

urlpatterns = [
    path('',views.Home, name="Home"),
    path('signup', views.signup, name="signup"),
    path('login', views.handleLogin, name="handleLogin"),
    path('logout', views.handleLogout, name="handleLogout"),
    path('contact', views.contact, name="contact"),
    path('join', views.enroll, name="enroll"),
    path('profile', views.profile, name="profile"),
    path('attendance', views.attendance, name="attendance"),

    path('save_profile_changes/', views.save_profile_changes, name='save_profile_changes'),
]
