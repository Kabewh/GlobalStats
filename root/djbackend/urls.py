from django.contrib import admin
from django.urls import include, path
from django.views.generic.base import TemplateView
from . import views
from .views import PopulationView
# from .views import BirthsTodayView
# from .views import DeathsTodayView
# from .views import EnergyUsedTodayView
# from .views import DaysToTheEndOfCoalView
# from .views import CigarettesSmokedTodayView
# from .views import AbortionsThisYearView
# from .views import RoadTrafficAccidentFatalitiesTodayView
# from .views import OilLeft

urlpatterns = [
    path('population/', PopulationView.as_view(), name='population'),
    # path('birthsToday/', BirthsTodayView.as_view(), name='birthsToday'),
    # path('deathsToday/', DeathsTodayView.as_view(), name='deathsToday'),
    # path('energyUsedToday/', EnergyUsedTodayView.as_view(), name='energyUsedToday'),
    # path('daysToTheEndOfCoal/', DaysToTheEndOfCoalView.as_view(), name='daysToTheEndOfCoal'),
    # path('cigarettesSmokedToday/', CigarettesSmokedTodayView.as_view(), name='cigarettesSmokedToday'),
    # path('abortionsThisYear/', AbortionsThisYearView.as_view(), name='abortionsThisYear'),
    # path('roadTrafficAccidentFatalitiesToday/', RoadTrafficAccidentFatalitiesTodayView.as_view(), name='roadTrafficAccidentFatalitiesToday'),
    # path('oilLeft/', OilLeft.as_view(), name='oilLeft'),
    # path('population/', views.getPopulation),
    # path('birthsToday/', views.getBirthsToday),
    # path('deathsToday/', views.getDeathsToday),
    # path('energyUsedToday/', views.getEnergyUsedToday),
    path('admin/', admin.site.urls)
]
