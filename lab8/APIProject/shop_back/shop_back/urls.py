"""
URL configuration for shop_back project.

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
from django.urls import re_path as url
from ApiApplication import views

urlpatterns = [
    path('admin/', admin.site.urls),
    path('products', views.ProductApiView.as_view()),
    path('products/<int:pk>/', views.product_detail, name='product-detail'),
    path('categories', views.CategoryApiView.as_view()),
    path('categories/<int:pk>/', views.category_detail, name='category-detail'),
    path('products/category/<int:category_id>/', views.products_by_category_id, name='product-by-category'),
]
