# Generated by Django 4.1.2 on 2023-05-24 14:18

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('members', '0001_initial'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='population',
            name='type',
        ),
    ]
