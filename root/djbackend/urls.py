from django.contrib import admin
from django.urls import include, path
from . import views

urlpatterns = [
    path('', views.index1),
    path('admin/', admin.site.urls)
]
