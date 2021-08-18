
from django.urls import path, include
from django.views.generic import TemplateView
from . import views


app_name = 'contacts'

urlpatterns = [
    path('contacts/', views.ContactFormView.as_view(), name='contacts'),
    path('thanks/', TemplateView.as_view(template_name='contacts/thanks.html'), name='thanks'),
]