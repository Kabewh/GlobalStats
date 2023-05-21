from django.http import HttpResponse, HttpResponseNotFound
from django.views.decorators.http import require_http_methods
from django.shortcuts import render
from rest_framework import viewsets
from worldometer import api
import json
# https://www.pbs.org/wgbh/nova/teachers/activities/3108_worldbal_02.html (calculating growth rate)

def getPopulation(request):
    population = api.current_world_population()['current_world_population']
    return HttpResponse(json.dumps(population))

def getBirthsToday(request):
    birthsToday = api.births_today()['births_today']
    return HttpResponse(json.dumps(birthsToday))

def getDeathsToday(request):
    deathsToday = api.deaths_today()['deaths_today']
    return HttpResponse(json.dumps(deathsToday))

def getEnergyUsedToday(request):
    energyUsedToday = api.energy_used_today()['energy_used_today']
    return HttpResponse(json.dumps(energyUsedToday))
# #to be done other routes