# Generated by Django 4.1.2 on 2023-06-14 13:14

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('members', '0004_remove_population_age_group_and_more'),
    ]

    operations = [
        migrations.AddField(
            model_name='population',
            name='age_group',
            field=models.IntegerField(default=1),
            preserve_default=False,
        ),
        migrations.AddField(
            model_name='population',
            name='death_total',
            field=models.IntegerField(default=1),
            preserve_default=False,
        ),
        migrations.AddField(
            model_name='population',
            name='location',
            field=models.CharField(default=1, max_length=100),
            preserve_default=False,
        ),
        migrations.AddField(
            model_name='population',
            name='time',
            field=models.IntegerField(default=1),
            preserve_default=False,
        ),
    ]
