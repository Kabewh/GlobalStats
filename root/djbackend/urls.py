from django.contrib import admin
from django.urls import include, path
from django.views.generic.base import TemplateView
from . import views

urlpatterns = [
    path('countries/', views.getCountries),
    path('population/<str:country>/<int:year>/', views.getWorldPopulation),    # path('population/', views.getPopulation),
    path('youngerOlderInfo/<str:country>/<int:year>/', views.getYoungerOlderInfo),
    path('lifeExpectancy/<str:country>/<int:year>/', views.getLifeExpectancy),
    path('admin/', admin.site.urls)
]
