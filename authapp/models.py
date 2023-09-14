from django.db import models

# Create your models here.
# This file is for creating database tables

class Contact(models.Model):
    name=models.CharField(max_length=100)
    email=models.EmailField()
    phonenumber=models.CharField(max_length=11)
    description=models.TextField()

    def __str__(self):
        return self.email

class Enrollment(models.Model):
    fullname=models.CharField(max_length=100)
    email=models.EmailField()
    gender=models.CharField(max_length=100)
    phonenumber=models.CharField(max_length=11)
    birthdate=models.CharField()
    membership=models.CharField(max_length=250)
    trainer=models.CharField(max_length=50)
    reference=models.CharField(max_length=55)
    address=models.TextField()
    paymentStatus=models.CharField(max_length=55, blank=True, null=True)
    price=models.IntegerField(max_length=55, blank=True, null=True)
    duedate=models.DateTimeField(blank=True, null=True)
    timestamp=models.DateTimeField(auto_now_add=True, blank=True)

    def __str__(self):
        return self.fullname
    

class Trainer(models.Model):
    name=models.CharField(max_length=100)
    gender=models.CharField(max_length=50)
    phone=models.CharField(max_length=11)
    salary=models.IntegerField(max_length=50)
    timestamp=models.DateTimeField(auto_now_add=True, blank=True)

    def __str__(self):
        return self.name

class MembershipPlan(models.Model):
    plan=models.CharField(max_length=250)
    price=models.IntegerField(max_length=55)

    def __int__(self):
        return self.id