from django.http import HttpResponse, HttpResponseNotFound
from django.views.decorators.http import require_http_methods
from django.shortcuts import render
from rest_framework import viewsets
from worldometer import api
# https://www.pbs.org/wgbh/nova/teachers/activities/3108_worldbal_02.html (calculating growth rate)

@require_http_methods(['GET'])
def getPopulation(request):
    population = api.current_world_population()
    populationNumber = population['current_world_population']
    print('populationNumber:', populationNumber)
    return HttpResponse({populationNumber})

