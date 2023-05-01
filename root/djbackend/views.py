from django.http import HttpResponse, HttpResponseNotFound
from django.views.decorators.http import require_http_methods
from django.shortcuts import render
from rest_framework import viewsets
from worldometer import api
import json
# https://www.pbs.org/wgbh/nova/teachers/activities/3108_worldbal_02.html (calculating growth rate)

def getPopulation(request):
    population = api.current_world_population()['current_world_population']
    print(population)
    return HttpResponse(json.dumps(population))

def getBirthsToday(request):
    birthsToday = api.births_today()['births_today']
    # birthsTodayNumber = births_today['']
    print(birthsToday)
    return HttpResponse(json.dumps(birthsToday))