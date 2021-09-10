
from django.contrib.auth import get_user_model
from rest_framework.permissions import IsAdminUser
from rest_framework.viewsets import ModelViewSet

from .models import Teacher, Student, Course
from .permissions import IsAuthenticatedAndReadOnly
from rest_framework.permissions import IsAuthenticated
from .serializers import TeacherSerializer, StudentSerializer, CourseSerializer, UserSerializer
from rest_framework.routers import APIRootView
class CustomAPIRootView(APIRootView):
    permission_classes = [IsAuthenticated]


class UserViewSet(ModelViewSet):
    queryset = get_user_model().objects.all()
    serializer_class = UserSerializer
    # permission_classes = [IsAdminUser | IsAuthenticatedAndReadOnly]


class TeacherViewSet(ModelViewSet):
    queryset = Teacher.objects.all()
    serializer_class = TeacherSerializer
    # permission_classes = [IsAdminUser | IsAuthenticatedAndReadOnly]

    def get_queryset(self):
        qs = super().get_queryset()
        return qs.prefetch_related('courses')


class StudentViewSet(ModelViewSet):
    queryset = Student.objects.all()
    serializer_class = StudentSerializer
    # permission_classes = [IsAdminUser | IsAuthenticatedAndReadOnly]

    def get_queryset(self):
        qs = super().get_queryset()
        return qs.prefetch_related('courses')


class CourseViewSet(ModelViewSet):
    queryset = Course.objects.all()
    serializer_class = CourseSerializer
    # permission_classes = [IsAdminUser | IsAuthenticatedAndReadOnly]

    def get_queryset(self):
        qs = super().get_queryset()
        return qs.prefetch_related('students', 'teachers')
