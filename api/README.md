# Um simples template DRF configurado para PT-BR com CORS ORIGIN, Arquivos .ENV, MySQL e DockerFile configurado para Build

## Dependências

- Python
- DJango
- DjangoRestFramework

## Configuração Inicial

Crie um ambiente vritual para começar com o comando `python -m venv env` depois entre nele `env\Scripts\activate`.
Atualize o PIP do seu VENV `python -m pip install --upgrade pip`.
Instale todos as dependências do projeto `pip install -r requirements.txt`.
Crie um arquivo .env no diretório `api` seguindo o modelo env_template.
Crie uma schema/banco de dados com o nome provido no template.
Execute as migrations iniciais `python manage.py migrate`.
Crie um superuser para o DjangoAdmin `python manage.py createsuperuser`.

## Inicialização

Abra o Ambiente através do comando `env\Scripts\activate`.
Execute as migrations para ter certeza que estará com o banco atualizado `python manage.py migrate`.
Depois execute o Django `python manage.py runserver`.

## Comandos úteis

Entre no Django Admin `http://127.0.0.1:8000/admin/`
Criar as Fixtures `py manage.py dumpdata modulo.modelo --indent 1 -o paath-to-file.json`
Montar imagem Docker `docker build -t {usuario\nome_da_imagem} .`

## Info

URL padrão da API é `http://dominio:8000/api/`
