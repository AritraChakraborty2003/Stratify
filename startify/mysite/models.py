from django.db import models

class User2(models.Model):
  name=models.TextField(primary_key=True)
  email=models.EmailField()
  domain1=models.CharField(max_length=30)
  domain2=models.CharField(max_length=25)
  expertise=models.TextField()
  password=models.TextField()
    # Create your models here.
