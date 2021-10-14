############################################################
# Dockerfile to build Python / Django / Mysql small container images
# Based on Linux Alpine
############################################################

FROM python:3.9.6-alpine

ENV PYTHONUNBUFFERED 1

RUN apk update \
	&& apk add --virtual build-deps gcc python3-dev musl-dev \
	&& apk add --no-cache mariadb-connector-c-dev

COPY . /app

# Prevent build fail
COPY ./requirements.txt /requirements.txt

RUN pip install --upgrade pip && pip install --no-cache-dir -r requirements.txt

# Prevent start fail
COPY start_django.sh /start_django.sh

# Limpa espaço em disco
RUN apk del build-deps musl-dev gcc python3-dev
RUN rm -Rf ~/.cache

WORKDIR /app

EXPOSE 8000

CMD ["sh", "./start_django.sh"]
