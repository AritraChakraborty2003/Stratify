from django.shortcuts import render
from django.shortcuts import redirect
from mysite.models import User2
from django.http import JsonResponse,HttpResponse
# Create your views here.
def index(request):
    return render(request,"index.html")
def Users_API(request):
    user2=User2.objects.all()
    return JsonResponse(list(user2.values()),safe=False)