"""api URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/3.1/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from rest_framework import permissions
from drf_yasg.views import get_schema_view
from drf_yasg import openapi
from django.contrib import admin
from django.urls import path, re_path, include
from rest_framework.authtoken.views import ObtainAuthToken


schema_view = get_schema_view(
    openapi.Info(
        title="TheCave API",
        default_version='v1',
        description="Uma nova forma de ver a API",
        terms_of_service="https://www.google.com/policies/terms/",
        contact=openapi.Contact(email="help@thecave.com.br"),
        license=openapi.License(name="BSD License"),
    ),
    public=True,
    permission_classes=[permissions.IsAuthenticated],
)

urlpatterns = [
    re_path(r'^docs(?P<format>\.json|\.yaml)$',
            schema_view.without_ui(cache_timeout=0), name='schema-json'),
    path(r'docs/', schema_view.with_ui('swagger',
                                       cache_timeout=0), name='schema-swagger-ui'),
    path('admin/', admin.site.urls),
    path('api/login/', ObtainAuthToken.as_view()),
    path('api/', include('core.urls')),

]
