from django.urls import reverse_lazy

from rest_framework.response import Response
from rest_framework.views import APIView

from .forms import ContactForm
from django.views.generic.edit import FormView
import django_rq

from . import tasks
from . import config


class ContactFormViewOld(FormView):
    template_name = 'contacts/contacts.html'
    form_class = ContactForm
    success_url = reverse_lazy('contacts:thanks')

    def form_valid(self, form):
        user_subject = form.cleaned_data['subject']
        user_text = form.cleaned_data['message']
        user_email = form.cleaned_data['email']

        subject_for_admin = config.SUBJECT_NOTIFICATION_PATTERN.format(user_subject)
        text_for_admin = config.TEXT_NOTIFICATION_PATTERN.format(user_email, user_subject, user_text)

        subject_for_user = config.SUBJECT_RESPONSE_PATTERN
        text_for_user = config.TEXT_RESPONSE_PATTERN.format(user_email, user_text)

        django_rq.enqueue(tasks.send_mail_task, subject_for_admin, text_for_admin, config.ADMIN_EMAIL, config.COMMON_EMAIL)
        django_rq.enqueue(tasks.send_mail_task, subject_for_user, text_for_user, user_email, config.COMMON_EMAIL)
        return super().form_valid(form)


class ContactFormView(APIView):

    def post(self, request):
        user_email = request.data['email']
        user_subject = request.data['subject']
        user_text = request.data['message']

        subject_for_admin = config.SUBJECT_NOTIFICATION_PATTERN.format(user_subject)
        text_for_admin = config.TEXT_NOTIFICATION_PATTERN.format(user_email, user_subject, user_text)

        subject_for_user = config.SUBJECT_RESPONSE_PATTERN
        text_for_user = config.TEXT_RESPONSE_PATTERN.format(user_email, user_text)

        django_rq.enqueue(tasks.send_mail_task, subject_for_admin, text_for_admin, config.ADMIN_EMAIL, config.COMMON_EMAIL)
        django_rq.enqueue(tasks.send_mail_task, subject_for_user, text_for_user, user_email, config.COMMON_EMAIL)

        return Response(status=200)