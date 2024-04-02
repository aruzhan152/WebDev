from django.db import models

# Create your models here.
class Product(models.Model):
    id=models.IntegerField(primary_key=True)
    name=models.CharField(max_length=200)
    price=models.FloatField()
    description=models.TextField()
    count=models.IntegerField()
    is_active=models.BooleanField(default=True)
    category_id=models.IntegerField()
    

class Category(models.Model):
    id=models.IntegerField(primary_key=True)
    name=models.CharField(max_length=200)
    