"""
URL configuration for hh_back project.

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/5.0/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path
from HHApi import views
urlpatterns = [
    path('admin/', admin.site.urls),
    path('vacancies/top_ten/', views.TopTenVacancies.as_view()),
    path('vacancies', views.VacancyAPIView.as_view()),
    path('vacancies/<int:id>', views.get_vacancy_by_id),
    path('companies', views.CompanyAPIView.as_view()),
    path('companies/<int:id>', views.get_company_by_id),
    path('companies/<int:company_id>/vacancies/', views.get_vacancies_by_company),

]