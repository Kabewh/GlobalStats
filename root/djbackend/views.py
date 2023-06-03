from django.http import HttpResponse, HttpResponseNotFound
from django.views.decorators.http import require_http_methods
from django.shortcuts import render
from rest_framework import viewsets
from django.views import View
from members.models import Population
import json


def getCountries(request):
    all_entries = Population.objects.all().values()
    countries = all_entries.values_list('country', flat=True).distinct()
    if countries:
        return HttpResponse(json.dumps(list(countries)))
    else:
        return HttpResponseNotFound('<h1>Page not found</h1>')
        
def getWorldPopulation(request, country, year):
    all_entries = Population.objects.all().values()
    country_year = all_entries.filter(country=country, year=year)
    population = country_year[0]['total_population'] * 1000
    if country_year:
        return HttpResponse(json.dumps(population))
    else:
        return HttpResponseNotFound('<h1>Page not found</h1>')

all_entries = Population.objects.all().values()
world_2023 = all_entries.filter(country='World', year=2023)
world_birth = all_entries.filter(country='World', year=2002)
growth_rate = world_2023[0]['population_growth_rate']
born_population = world_birth[0]['total_population'] * 1000
# print(json.dumps(born_population), json.dumps(growth_rate))

def getYoungerOlderInfo(request, country, year):
    all_entries = Population.objects.all().values()
    world_2023 = all_entries.filter(country='World', year=2023)
    world_birth = all_entries.filter(country=country, year=year)
    growth_rate = world_2023[0]['population_growth_rate']
    birth_rate = world_birth[0]['births'] * 1000
    print(json.dumps(birth_rate))
    return HttpResponse(json.dumps(birth_rate))

def getLifeExpectancy(request, country, year):
    all_entries = Population.objects.all().values()
    country_year = all_entries.filter(country=country, year=year)
    life_expectancy = country_year[0]['life_expectancy']
    if country_year:
        return HttpResponse(json.dumps(life_expectancy))
    else:
        return HttpResponseNotFound('<h1>Page not found</h1>')

# https://www.pbs.org/wgbh/nova/teachers/activities/3108_worldbal_02.html (calculating growth rate)




# #to be done other routes