from django.shortcuts import render
from rest_framework.views import APIView
from rest_framework.response import Response
from django.http import JsonResponse
from .models import *
from .serializers import VacancySerializer, CompanySerializer
from django.views.decorators.csrf import csrf_exempt
import json

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
    
    @csrf_exempt
    def update(request, id):
        try:
            company = Company.objects.get(id=id)
            if request.method == 'PUT':
                data = json.loads(request.body)
                company.name = data.get('name', company.name)
                company.description = data.get('description', company.description)
                company.city = data.get('city', company.city)
                company.address = data.get('address', company.address)
                company.save()
                return JsonResponse({'message': 'Company updated successfully'}, status=200)
            else:
                return JsonResponse({'error': 'Only PUT requests are allowed'}, status=405)
        except Company.DoesNotExist:
            return JsonResponse({'error': 'Company not found'}, status=404)
            
    def delete_company(request, id):
        try:
            company = Company.objects.get(id=id)
            company.delete()
            return JsonResponse({'message': 'Company deleted successfully'}, status=204)
        except Company.DoesNotExist:
            return JsonResponse({'error': 'Company not found'}, status=404)
        
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
    
    @csrf_exempt
    def update_vacancy(request, id):
        try:
            vacancy = Vacancy.objects.get(id=id)
            if request.method == 'PUT':
                data = json.loads(request.body)
                vacancy.name = data.get('name', vacancy.name)
                vacancy.description = data.get('description', vacancy.description)
                vacancy.salary = data.get('salary', vacancy.salary)
                if 'company' in data:
                    try:
                        company = Company.objects.get(id=data['company'])
                        vacancy.company = company
                    except Company.DoesNotExist:
                        return JsonResponse({'error': 'Company not found'}, status=404)
                vacancy.save()
                return JsonResponse({'message': 'Vacancy updated successfully'}, status=200)
            else:
                return JsonResponse({'error': 'Only PUT requests are allowed'}, status=405)
        except Vacancy.DoesNotExist:
            return JsonResponse({'error': 'Vacancy not found'}, status=404)
    
    def delete_vacancy(request, id):
        try:
            vacancy = Vacancy.objects.get(id=id)
            vacancy.delete()
            return JsonResponse({'message': 'Vacancy deleted successfully'}, status=204)
        except Vacancy.DoesNotExist:
            return JsonResponse({'error': 'Vacancy not found'}, status=404)
    
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

def get_vacancies_by_company(request, company_id):
    vacancies = Vacancy.objects.filter(company_id=company_id)
    vacancies_json = [vacancy.to_json() for vacancy in vacancies]
    return JsonResponse(vacancies_json, safe=False)