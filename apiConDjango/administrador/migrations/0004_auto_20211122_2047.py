# Generated by Django 3.2.9 on 2021-11-23 01:47

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('administrador', '0003_personal'),
    ]

    operations = [
        migrations.AlterField(
            model_name='personal',
            name='DNI',
            field=models.IntegerField(),
        ),
        migrations.AlterField(
            model_name='personal',
            name='Telefono',
            field=models.IntegerField(),
        ),
    ]