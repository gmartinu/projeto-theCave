# Generated by Django 3.2.9 on 2021-11-04 00:52

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('core', '0004_auto_20211020_1819'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='agendamento',
            name='cliente',
        ),
        migrations.AddField(
            model_name='agendamento',
            name='cliente',
            field=models.ForeignKey(blank=True, default=None, null=True, on_delete=django.db.models.deletion.PROTECT, related_name='cliente_agendamentos', to='core.pessoa'),
        ),
        migrations.RemoveField(
            model_name='agendamento',
            name='funcionario',
        ),
        migrations.AddField(
            model_name='agendamento',
            name='funcionario',
            field=models.ForeignKey(blank=True, default=None, null=True, on_delete=django.db.models.deletion.PROTECT, related_name='funcionario_agendamentos', to='core.pessoa'),
        ),
        migrations.RemoveField(
            model_name='agendamento',
            name='pagamentos',
        ),
        migrations.AddField(
            model_name='agendamento',
            name='pagamentos',
            field=models.ForeignKey(blank=True, default=None, null=True, on_delete=django.db.models.deletion.PROTECT, related_name='agendamento', to='core.pagamentos'),
        ),
    ]
