#!/bin/bash

cd edtech_platform
python manage.py rqworker &
python manage.py runserver 0.0.0.0:8000
