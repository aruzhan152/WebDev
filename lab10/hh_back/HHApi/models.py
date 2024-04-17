from django.db import models

# Create your models here.
class Company(models.Model):
    id=models.IntegerField(primary_key=True)
    name=models.CharField(max_length=200)
    description=models.TextField()
    city=models.CharField(max_length=200)
    address=models.TextField()


    def __str__(self):
        return f'ID: {self.id}, Name: {self.name}'

    def to_json(self):
        return {
            'id': self.id,
            'name': self.name,
            'description': self.description,
            'city': self.city,
            'address': self.address
        }

    class Meta:
        verbose_name = 'Company'
        verbose_name_plural = 'Companies'
    

class Vacancy(models.Model):
    id=models.IntegerField(primary_key=True)
    name=models.CharField(max_length=200)
    description=models.TextField()
    salary=models.FloatField()
    company=models.ForeignKey('Company', on_delete=models.CASCADE)
    
    def __str__(self):
        return f'ID: {self.id}, Name: {self.name}'

    def to_json(self):
        return {
            'id': self.id,
            'name': self.name,
            'description': self.description,
            'salary': self.salary,
            'company': self.company.to_json()
        }

    class Meta:
        verbose_name = 'Vacancy'
        verbose_name_plural = 'Vacancies'