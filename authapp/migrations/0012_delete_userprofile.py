# Generated by Django 4.2.5 on 2023-10-17 07:25

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('authapp', '0011_remove_enrollment_profilepicture_userprofile'),
    ]

    operations = [
        migrations.DeleteModel(
            name='UserProfile',
        ),
    ]