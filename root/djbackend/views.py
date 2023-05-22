from django.http import HttpResponse, HttpResponseNotFound
from django.views.decorators.http import require_http_methods
from django.shortcuts import render
from rest_framework import viewsets
from django.views import View
import json
import asyncio
from worldometer import api

class PopulationView(View):
    async def get(self, request):
        population = await asyncio.to_thread(api.current_world_population)
        population_data = population['current_world_population']
        return HttpResponse(json.dumps(population_data))

# class BirthsTodayView(View):
#     async def get(self, request):
#         birthsToday = await asyncio.to_thread(api.births_today)
#         birthsToday_data = birthsToday['births_today']
#         return HttpResponse(json.dumps(birthsToday_data))

# class DeathsTodayView(View):
#     async def get(self, request):
#         deathsToday = await asyncio.to_thread(api.deaths_today)
#         deathsToday_data = deathsToday['deaths_today']
#         return HttpResponse(json.dumps(deathsToday_data))

# class EnergyUsedTodayView(View):
#     async def get(self, request):
#         energyUsedToday = await asyncio.to_thread(api.energy_used_today)
#         energyUsedToday_data = energyUsedToday['energy_used_today']
#         return HttpResponse(json.dumps(energyUsedToday_data))

# class DaysToTheEndOfCoalView(View):
#     async def get(self, request):
#         daysToTheEndOfCoal = await asyncio.to_thread(api.days_to_the_end_of_coal)
#         daysToTheEndOfCoal_data = daysToTheEndOfCoal['days_to_the_end_of_coal']
#         return HttpResponse(json.dumps(daysToTheEndOfCoal_data))

# class CigarettesSmokedTodayView(View):
#     async def get(self, request):
#         cigarettesSmokedToday = await asyncio.to_thread(api.cigarettes_smoked_today)
#         cigarettesSmokedToday_data = cigarettesSmokedToday['cigarettes_smoked_today']
#         return HttpResponse(json.dumps(cigarettesSmokedToday_data))

# class AbortionsThisYearView(View):
#     async def get(self, request):
#         abortionsThisYear = await asyncio.to_thread(api.abortions_this_year)
#         abortionsThisYear_data = abortionsThisYear['abortions_this_year']
#         return HttpResponse(json.dumps(abortionsThisYear_data))

# class RoadTrafficAccidentFatalitiesTodayView(View):
#     async def get(self, request):
#         roadTrafficAccidentFatalitiesToday = await asyncio.to_thread(api.road_traffic_accident_fatalities_today)
#         roadTrafficAccidentFatalitiesToday_data = roadTrafficAccidentFatalitiesToday['road_traffic_accident_fatalities_today']
#         return HttpResponse(json.dumps(roadTrafficAccidentFatalitiesToday_data))

# class OilLeft(View):
#     async def get(self, request):
#         oil_left = await asyncio.to_thread(api.oil_left)
#         oil_left_data = oil_left['oil_left']
#         return HttpResponse(json.dumps(oil_left_data))

# # def getBirthsToday(request): 
#     birthsToday = api.births_today()['births_today']
#     return HttpResponse(json.dumps(birthsToday))

# def getDeathsToday(request):
#     deathsToday = api.deaths_today()['deaths_today']
#     return HttpResponse(json.dumps(deathsToday))

# def getEnergyUsedToday(request):
#     energyUsedToday = api.energy_used_today()['energy_used_today']
#     return HttpResponse(json.dumps(energyUsedToday))

# def getDaysToTheEndOfCoal(request):
#     getDaysToTheEndOfCoal = api.days_to_the_end_of_coal()['days_to_the_end_of_coal']
#     return HttpResponse(json.dumps(getDaysToTheEndOfCoal))
# https://www.pbs.org/wgbh/nova/teachers/activities/3108_worldbal_02.html (calculating growth rate)




# #to be done other routes