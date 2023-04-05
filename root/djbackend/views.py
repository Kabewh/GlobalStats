from django.http import HttpResponse
from django.shortcuts import render
from rest_framework import viewsets
from worldometer import api
# https://www.pbs.org/wgbh/nova/teachers/activities/3108_worldbal_02.html (calculating growth rate)


def index(request):
    print('index() called')
    population = api.current_world_population()
    populationNumber = population['current_world_population']
    print('populationNumber:', populationNumber)
    return render(request, 'index.html', {'populationNumber': populationNumber})

def index1(request):
    return render(request 'index1.html')

