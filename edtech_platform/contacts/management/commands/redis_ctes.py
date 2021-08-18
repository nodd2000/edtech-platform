from django.core.management import BaseCommand
from datetime import datetime
import django_rq
from contacts.tasks import send_email


class Command(BaseCommand):
    def handle(self, *args, **options):
        scheduler = django_rq.get_scheduler('default')
        job = scheduler.enqueue_at(datetime.utcnow(), func=send_email)
        print('job runnedd')
        print(job)
