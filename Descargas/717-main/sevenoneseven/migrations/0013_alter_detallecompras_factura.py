# Generated by Django 4.0.6 on 2025-04-10 15:57

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('sevenoneseven', '0012_detallecompras_factura'),
    ]

    operations = [
        migrations.AlterField(
            model_name='detallecompras',
            name='factura',
            field=models.ForeignKey(default=1, on_delete=django.db.models.deletion.CASCADE, related_name='detalles', to='sevenoneseven.factura'),
            preserve_default=False,
        ),
    ]
