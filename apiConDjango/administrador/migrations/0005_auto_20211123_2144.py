# Generated by Django 3.2.9 on 2021-11-24 02:44

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('administrador', '0004_auto_20211122_2047'),
    ]

    operations = [
        migrations.AlterField(
            model_name='personal',
            name='DNI',
            field=models.CharField(max_length=8),
        ),
        migrations.AlterField(
            model_name='personal',
            name='Telefono',
            field=models.CharField(max_length=9),
        ),
    ]
