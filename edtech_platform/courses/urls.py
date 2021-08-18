from django.contrib import admin
from django.urls import path, include
from django.views.generic import TemplateView
from rest_framework.permissions import IsAuthenticated
from rest_framework.routers import DefaultRouter, APIRootView
from .views_api import TeacherViewSet, StudentViewSet, CourseViewSet, UserViewSet, CustomAPIRootView
from . import views

app_name = 'courses'


class CustomRouter(DefaultRouter):
    APIRootView = CustomAPIRootView


router = CustomRouter()
router.register("users", UserViewSet)
router.register("teachers", TeacherViewSet)
router.register("students", StudentViewSet)
router.register("courses", CourseViewSet)


urlpatterns = [
    path('', views.CoursesList.as_view(), name='index'),
    path('api/', include(router.urls)),

    path('about/', TemplateView.as_view(template_name='courses/about.html'), name='about'),

    path('course/<int:pk>/', views.CourseDetailView.as_view(), name='course'),

    path('course/create/', views.CourseCreateView.as_view(), name='course_create'),
    path('course/<int:pk>/update/', views.CourseUpdateView.as_view(), name='course_update'),
    path('course/<int:pk>/delete/', views.CourseDeleteView.as_view(), name='course_delete'),

    path('test_fetch_axios/', TemplateView.as_view(template_name="courses/test_fetch_axios.html")),

]