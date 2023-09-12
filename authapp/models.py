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