from rest_framework.viewsets import ModelViewSet
from core.serializers import UserSerializer, PagamentosSerializer, ServicosSerializer, EnderecoSerializer, PessoaSerializer, AgendamentoSerializer
from core.models import User, Pagamentos, Servicos, Endereco, Pessoa, Agendamento


class UserViewSet(ModelViewSet):
    queryset = User.objects.all()
    filter_fields = '__all__'
    serializer_class = UserSerializer


class PagamentosViewSet(ModelViewSet):
    queryset = Pagamentos.objects.all()
    filter_fields = '__all__'
    serializer_class = PagamentosSerializer


class ServicosViewSet(ModelViewSet):
    queryset = Servicos.objects.all()
    filter_fields = '__all__'
    serializer_class = ServicosSerializer


class EnderecoViewSet(ModelViewSet):
    queryset = Endereco.objects.all()
    filter_fields = '__all__'
    serializer_class = EnderecoSerializer


class PessoaViewSet(ModelViewSet):
    queryset = Pessoa.objects.all()
    filter_fields = '__all__'
    serializer_class = PessoaSerializer


class AgendamentoViewSet(ModelViewSet):
    queryset = Agendamento.objects.all()
    filter_fields = '__all__'
    serializer_class = AgendamentoSerializer
