# Generated by Django 4.1.2 on 2023-06-14 13:13

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('members', '0003_population_age_group_population_death_total_and_more'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='population',
            name='age_group',
        ),
        migrations.RemoveField(
            model_name='population',
            name='death_total',
        ),
        migrations.RemoveField(
            model_name='population',
            name='location',
        ),
        migrations.RemoveField(
            model_name='population',
            name='time',
        ),
    ]
