# Generated by Django 3.2.4 on 2021-08-22 19:22

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('courses', '0005_auto_20210716_2031'),
    ]

    operations = [
        migrations.AddField(
            model_name='course',
            name='img_url',
            field=models.TextField(blank=True, default=''),
        ),
    ]