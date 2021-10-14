#!/bin/bash

# Apply database migrations
echo Running Migrate.
python manage.py migrate

# Collect static files
echo Running Collectstatic.
python manage.py collectstatic --noinput


python manage.py runserver 0.0.0.0:8000