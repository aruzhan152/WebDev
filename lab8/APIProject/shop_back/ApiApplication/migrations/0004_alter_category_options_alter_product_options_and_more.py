# Generated by Django 5.0.3 on 2024-04-02 18:45

import django.db.models.deletion
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('ApiApplication', '0003_alter_product_category_id'),
    ]

    operations = [
        migrations.AlterModelOptions(
            name='category',
            options={'verbose_name': 'Category', 'verbose_name_plural': 'Categories'},
        ),
        migrations.AlterModelOptions(
            name='product',
            options={'verbose_name': 'Product', 'verbose_name_plural': 'Products'},
        ),
        migrations.AlterField(
            model_name='product',
            name='category_id',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='product', to='ApiApplication.category'),
        ),
    ]
