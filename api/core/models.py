from django.db import models
from django.contrib.auth.models import AbstractUser

class User(AbstractUser):
    pessoa = models.OneToOneField(
        'core.Pessoa',
        on_delete=models.PROTECT,
        related_name='user',
        default=None,
        null=True,
        blank=True
    )

class Pagamentos(models.Model):
    valor_pago = models.DecimalField(
        verbose_name='Valor do Pagamento Realizado', max_digits=15, decimal_places=2, default=0)

class Servicos(models.Model):
    descricao = models.CharField(max_length=191, verbose_name='Nome', default=None)
    valor = models.DecimalField(
        verbose_name='Valor do Serviço', max_digits=15, decimal_places=2, default=0)
        

class Endereco(models.Model):
    cep = models.CharField(
        max_length=8, verbose_name='Código de Endereço Postal', default=None, null=True, blank=True)
    endereco = models.CharField(
        max_length=300, verbose_name='Endereço', help_text='Nome da Rua/Endereço', default=None, null=True, blank=True)
    numero = models.CharField(
        max_length=10, verbose_name='Numero', default=None, null=True, blank=True)
    complemento = models.CharField(
        max_length=160, verbose_name='Complemento', default=None, null=True, blank=True)
    uf = models.CharField(max_length=2, verbose_name='UF',
                          help_text='Unidade Federativa', default=None, null=True, blank=True)
    estado = models.CharField(max_length=150, verbose_name='Estado',
                              help_text='Estado', default=None, null=True, blank=True)
    bairro = models.CharField(
        max_length=60, verbose_name='Bairro', default=None, null=True, blank=True)
    cidade = models.CharField(
        max_length=60, verbose_name='Cidade', default=None, null=True, blank=True)
    pais = models.CharField(
        max_length=60, verbose_name='País', default=None, null=True, blank=True)
    observacao = models.CharField(
        max_length=120, verbose_name='Observação', default=None, null=True, blank=True)
    ibge = models.CharField(
        max_length=10, verbose_name='IBGE', default=None, null=True, blank=True
    )


class Pessoa(models.Model):
    nome = models.CharField(max_length=191, verbose_name='Nome', default=None)
    cpf = models.CharField(
        max_length=14, verbose_name='CPF', default=None)
    data_nascimento = models.DateField(default=None, null=True, blank=True)
    sexo = models.PositiveIntegerField(
        verbose_name='Sexo',
        help_text='Sexo',
        default=4,
        choices=((1, 'Masculino'),
                 (2, 'Feminino'),
                 (3, 'Outro'),
                 (4, 'Indefinido')),
        null=True, blank=True
    )
    tel_cel = models.CharField(
        max_length=60, verbose_name='Telefone Celular', default=None, null=True, blank=True)
    email = models.CharField(
        max_length=120, verbose_name='Telefone Fixo', default=None, null=True, blank=True)
        

    enderecos = models.ManyToManyField(
        'core.Endereco',
        verbose_name='Endereços do Cliente',
    )

    gerente = models.BooleanField(
        verbose_name="Gerente", help_text="Se Pessoa é Gerente", default=False)
    cliente = models.BooleanField(
        verbose_name="Cliente", help_text="Se Pessoa é Cliente", default=False)
    func = models.BooleanField(
        verbose_name="Funcionário", help_text="Se Pessoa é Funcionario", default=False)
    funcionario_ativo = models.BooleanField(
        verbose_name='Funcionario Ativo', default=True, null=True, blank=True)
    cliente_ativo = models.BooleanField(
        verbose_name='Cliente Ativo', default=True, null=True, blank=True)
    gerente_ativo = models.BooleanField(
        verbose_name='Gerente Ativo', default=True, null=True, blank=True)

class Agendamento(models.Model):
    data =  models.DateTimeField(default=None, null=True)
    status = models.PositiveIntegerField(
        verbose_name='Status',
        help_text='Status do Agendamento',
        default=5,
        choices=((1, 'Pendente'),
                 (2, 'Em Andamento'),
                 (3, 'Aguardando Pagamento'),
                 (4, 'Concluido'),
                 (5, 'Cancelado')),
        null=True, blank=True
    )
    cliente = models.ManyToManyField(
        'core.Pessoa',
        # on_delete=models.PROTECT,
        related_name='cliente_agendamentos',
        default=None,
        blank=True
    )
    funcionario = models.ManyToManyField(
        'core.Pessoa',
        # on_delete=models.PROTECT,
        related_name='funcionario_agendamentos',
        default=None,
        blank=True
    )
    pagamentos = models.ManyToManyField(
        'core.Pagamentos',
        # on_delete=models.PROTECT,
        related_name='agendamento',
        default=None,
        blank=True
    )
    servicos = models.ManyToManyField(
        'core.Servicos',
        # on_delete=models.PROTECT,
        related_name='agendamento',
        default=None,
        blank=True
    )