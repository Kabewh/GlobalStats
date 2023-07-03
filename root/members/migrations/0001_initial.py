# Generated by Django 4.1.2 on 2023-05-24 13:45

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Population',
            fields=[
                ('id', models.AutoField(primary_key=True, serialize=False)),
                ('country', models.CharField(max_length=100)),
                ('type', models.CharField(max_length=100)),
                ('year', models.IntegerField()),
                ('total_population', models.IntegerField()),
                ('population_density', models.FloatField()),
                ('median_age', models.FloatField()),
                ('natural_change', models.FloatField()),
                ('rate_of_natural_change', models.FloatField()),
                ('population_change', models.FloatField()),
                ('population_growth_rate', models.FloatField()),
                ('births', models.IntegerField()),
                ('crude_birth_rate', models.FloatField()),
                ('total_fertility_rate', models.FloatField()),
                ('net_reproductive_rate', models.FloatField()),
                ('mean_age_childbearing', models.FloatField()),
                ('deaths', models.IntegerField()),
                ('male_deaths', models.IntegerField()),
                ('female_deaths', models.IntegerField()),
                ('crude_death_rate', models.FloatField()),
                ('life_expectancy', models.FloatField()),
                ('male_life_expectancy', models.FloatField()),
                ('female_life_expectancy', models.FloatField()),
                ('life_expectancy_at_15', models.FloatField()),
                ('male_life_expectancy_at_15', models.FloatField()),
                ('female_life_expectancy_at_15', models.FloatField()),
                ('life_expectancy_at_65', models.FloatField()),
                ('male_life_expectancy_at_65', models.FloatField()),
                ('female_life_expectancy_at_65', models.FloatField()),
                ('infant_deaths', models.IntegerField()),
                ('infant_mortality_rate', models.FloatField()),
            ],
        ),
    ]
