FROM python:3.8

RUN apt-get update

WORKDIR /var/app

COPY edtech_platform/requirements.txt ./
RUN pip install -r requirements.txt

# COPY edtech_platform ./

WORKDIR /var/app/edtech_platform

EXPOSE 8000
CMD ["python", "manage.py", "runserver", "0.0.0.0:8000"]