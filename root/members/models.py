from django.db import models

class Population(models.Model):
    id = models.AutoField(primary_key=True)
    country = models.CharField(max_length=100)  #country/region/province/state    
    year = models.IntegerField()    
    total_population = models.IntegerField()    #thousands
    population_density = models.FloatField() #people per sq. km
    median_age = models.FloatField() #years
    natural_change = models.FloatField() #(births - deaths) thousands
    rate_of_natural_change = models.FloatField() #per 1000 population
    population_change = models.FloatField() #thousands
    population_growth_rate = models.FloatField() #percentage
    births = models.IntegerField() #thousands
    crude_birth_rate = models.FloatField() #per 1000 population
    total_fertility_rate = models.FloatField() #live births per woman
    net_reproductive_rate = models.FloatField() #surviving daughters per woman
    mean_age_childbearing = models.FloatField() #years
    deaths = models.IntegerField() #thousands
    male_deaths = models.IntegerField() #thousands
    female_deaths = models.IntegerField() #thousands
    crude_death_rate = models.FloatField() #per 1000 population
    life_expectancy = models.FloatField() #years at birth
    male_life_expectancy = models.FloatField() #years at birth
    female_life_expectancy = models.FloatField() #years at birth
    life_expectancy_at_15 = models.FloatField() #years
    male_life_expectancy_at_15 = models.FloatField() #years
    female_life_expectancy_at_15 = models.FloatField() #years
    life_expectancy_at_65 = models.FloatField() #years
    male_life_expectancy_at_65 = models.FloatField() #years
    female_life_expectancy_at_65 = models.FloatField() #years
    infant_deaths = models.IntegerField() #thousands (under 1 year old)
    infant_mortality_rate = models.FloatField() #per 1000 live births