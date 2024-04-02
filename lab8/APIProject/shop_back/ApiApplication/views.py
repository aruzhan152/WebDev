from django.shortcuts import render
from rest_framework.views import APIView
from rest_framework.response import Response
from django.http import JsonResponse
from django.shortcuts import get_object_or_404
from .models import *
# Create your views here.

class ProductApiView(APIView):
    def get(self, request):
        allProducts=Product.objects.all().values()
        return Response({"Message":"List of Products", "Product List":allProducts})
    
    def post(self, request):
        Product.objects.create(id=request.data["id"],
                               name=request.data["name"],
                                price=request.data["price"],
                                description=request.data["description"],
                                count=request.data["count"],
                                is_active=request.data["is_active"],
                                category_id=request.data["category_id"], )
        product=Product.objects.all().filter(id=request.data["id"]).values()
        return Response({"Message":"New Product Added!", "Product":product})

class CategoryApiView(APIView):  
    def get(self, request):
        allCategories=Category.objects.all().values()
        return Response({"Message":"List of Categories", "Category List":allCategories})
    
    def post(self, request):
        Category.objects.create(
                    name=request.data["name"])
        category=Category.objects.all().filter(id=request.data["id"]).values()
        return Response({"Message":"New Category Added!", "Category":category})
    

def category_detail(request, pk):
    category = get_object_or_404(Category, pk=pk)
    data = {
        'id':category.id,
        'name':category.name        }
    return JsonResponse(data)

def products_by_category_id(request, category_id):
    products = Product.objects.filter(category_id=category_id).values('id', 'name', 'price', 'description', 'count', 'is_active')
    product_list = list(products)
    return JsonResponse(product_list, safe=False)

def product_detail(request, pk):
        product = get_object_or_404(Product, pk=pk)
        data = {
            'id': product.id,
            'name': product.name,
            'price': product.price,
            'description': product.description,
            'count': product.count,
            'is_active': product.is_active,
            'category_id':product.category_id
        }
        return JsonResponse(data)