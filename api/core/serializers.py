from rest_framework.serializers import ModelSerializer
from core.models import User, Pagamentos, Servicos, Endereco, Pessoa, Agendamento


class UserSerializer(ModelSerializer):

    class Meta:
        model = User
        fields = '__all__'


class PagamentosSerializer(ModelSerializer):

    class Meta:
        model = Pagamentos
        fields = '__all__'


class ServicosSerializer(ModelSerializer):

    class Meta:
        model = Servicos
        fields = '__all__'


class EnderecoSerializer(ModelSerializer):

    class Meta:
        model = Endereco
        fields = '__all__'


class PessoaSerializer(ModelSerializer):

    class Meta:
        model = Pessoa
        fields = '__all__'


class AgendamentoSerializer(ModelSerializer):

    class Meta:
        model = Agendamento
        fields = '__all__'
