# Generated by Django 4.0.6 on 2025-04-07 12:41

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('sevenoneseven', '0001_initial'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='factura',
            name='empleado',
        ),
    ]
