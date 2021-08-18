from django.http import HttpRequest, HttpResponse
from django.shortcuts import render, get_object_or_404
from django.urls import reverse_lazy
from django.views.generic import ListView, DetailView, CreateView, UpdateView, DeleteView

from .models import Course


class CoursesList(ListView):
    model = Course
    page_name = 'All Courses'

    def get_context_data(self, *, object_list=None, **kwargs):
        context = super().get_context_data(object_list=object_list, **kwargs)
        context['page_name'] = self.page_name
        return context


class CourseDetailView(DetailView):
    model = Course
    page_name = 'Course details'

    def get_context_data(self, *, object_list=None, **kwargs):
        context = super().get_context_data(object_list=object_list, **kwargs)
        context['page_name'] = self.page_name
        return context


class CourseCreateView(CreateView):
    model = Course
    page_name = 'Create new course'
    template_name_suffix = '_create'
    fields = ['title', 'description', 'teachers', 'students']
    success_url = reverse_lazy('courses:index')

    def get_context_data(self, *, object_list=None, **kwargs):
        context = super().get_context_data(object_list=object_list, **kwargs)
        context['page_name'] = self.page_name
        return context


class CourseDeleteView(DeleteView):
    model = Course
    page_name = 'Delete course'
    success_url = reverse_lazy('courses:index')

    def get_context_data(self, *, object_list=None, **kwargs):
        context = super().get_context_data(object_list=object_list, **kwargs)
        context['page_name'] = self.page_name
        return context


class CourseUpdateView(UpdateView):
    model = Course
    page_name = 'Edit course'
    template_name_suffix = '_update'
    fields = ['title', 'description', 'teachers', 'students']
    success_url = reverse_lazy('courses:index')

    def get_context_data(self, *, object_list=None, **kwargs):
        context = super().get_context_data(object_list=object_list, **kwargs)
        context['page_name'] = self.page_name
        return context
