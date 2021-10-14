from rest_framework.viewsets import ModelViewSet
from core.serializers import UserSerializer, PagamentosSerializer, ServicosSerializer, EnderecoSerializer, PessoaSerializer, AgendamentoSerializer
from core.models import User, Pagamentos, Servicos, Endereco, Pessoa, Agendamento


class UserViewSet(ModelViewSet):
    queryset = User.objects.order_by('pk')
    serializer_class = UserSerializer


class PagamentosViewSet(ModelViewSet):
    queryset = Pagamentos.objects.order_by('pk')
    serializer_class = PagamentosSerializer


class ServicosViewSet(ModelViewSet):
    queryset = Servicos.objects.order_by('pk')
    serializer_class = ServicosSerializer


class EnderecoViewSet(ModelViewSet):
    queryset = Endereco.objects.order_by('pk')
    serializer_class = EnderecoSerializer


class PessoaViewSet(ModelViewSet):
    queryset = Pessoa.objects.order_by('pk')
    serializer_class = PessoaSerializer


class AgendamentoViewSet(ModelViewSet):
    queryset = Agendamento.objects.order_by('pk')
    serializer_class = AgendamentoSerializer
