from django.shortcuts import render
from rest_framework.views import APIView
from rest_framework.response import Response
from django.http import JsonResponse
from .models import *
from .serializers import VacancySerializer

# Create your views here.
class CompanyAPIView(APIView):
    def get(self, request):
        allCompanies = Company.objects.all().values()
        return Response(allCompanies)
    
    def post(self, request):
        Company.objects.create(
            id=request.data["id"],
            name=request.data["name"],
            description=request.data["description"],
            city=request.data["city"],
            address=request.data["address"]
        )
        allCompanies = Company.objects.all().values()
        return Response(allCompanies)


    
    
class VacancyAPIView(APIView):
    def get(self, request):
        allVacancies = Vacancy.objects.all().values()
        return Response(allVacancies)
    
    def post(self, request):
        serializer = VacancySerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=201)
        return Response(serializer.errors, status=400)

    
def get_company_by_id(request, id):
    company = Company.objects.get(id=id)
    company_json = company.to_json()  
    return JsonResponse(company_json, safe=False)

def get_vacancy_by_id(request, id):
    vacancy = Vacancy.objects.get(id=id)
    vacancy_json = vacancy.to_json()
    return JsonResponse(vacancy_json, safe=False)


class TopTenVacancies(APIView):
    def get(self, request):
        top_ten_vacancies = Vacancy.objects.order_by('-salary')[:10]
        data = [{'name': vacancy.name, 'salary': vacancy.salary} for vacancy in top_ten_vacancies]
        return Response(data)
