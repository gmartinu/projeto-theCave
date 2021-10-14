from rest_framework.routers import SimpleRouter
from core import views


router = SimpleRouter()

router.register(r'user', views.UserViewSet)
router.register(r'pagamentos', views.PagamentosViewSet)
router.register(r'servicos', views.ServicosViewSet)
router.register(r'endereco', views.EnderecoViewSet)
router.register(r'pessoa', views.PessoaViewSet)
router.register(r'agendamento', views.AgendamentoViewSet)

urlpatterns = router.urls
