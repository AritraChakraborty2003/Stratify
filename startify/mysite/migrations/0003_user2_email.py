# Generated by Django 5.0.6 on 2024-05-10 11:01

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('mysite', '0002_user2_delete_user1'),
    ]

    operations = [
        migrations.AddField(
            model_name='user2',
            name='email',
            field=models.EmailField(default=1, max_length=254),
            preserve_default=False,
        ),
    ]
