from django.contrib import admin
from django.urls import include, path
from django.views.generic.base import TemplateView
from . import views

urlpatterns = [
    path('population/', views.getPopulation),
    path('birthsToday/', views.getBirthsToday),
    path('deathsToday/', views.getDeathsToday),
    path('energyUsedToday/', views.getEnergyUsedToday),
    path('admin/', admin.site.urls)
]
