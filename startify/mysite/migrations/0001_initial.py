# Generated by Django 5.0.6 on 2024-05-10 10:35

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='User1',
            fields=[
                ('name', models.TextField(primary_key=True, serialize=False)),
                ('domain1', models.CharField(max_length=30)),
                ('domain2', models.CharField(max_length=25)),
                ('expertise', models.TextField()),
            ],
        ),
    ]
