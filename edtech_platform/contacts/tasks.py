
from django_rq import job
from django.core.mail import send_mail


@job
def send_mail_task(subject, text, to_email, from_email):
    # send email using the self.cleaned_data dictionary
    send_mail(subject, text, from_email, [to_email], fail_silently=False)
