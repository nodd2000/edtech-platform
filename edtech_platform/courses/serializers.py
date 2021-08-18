
from rest_framework import serializers
from django.contrib.auth import get_user_model

from .models import Teacher, Student, Course


class UserSerializer(serializers.ModelSerializer):

    class Meta:
        model = get_user_model()
        fields = 'id', 'username'
        view_name = 'users'


class TeacherSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Teacher
        fields = 'id', 'bio', 'user', 'courses'
        view_name = 'teachers'
        extra_kwargs = {
            'user': {'view_name': 'courses:user-detail'},
        }

    courses = serializers.HyperlinkedRelatedField(
        view_name='courses:course-detail',
        many=True,
        read_only=False,
        queryset=Course.objects.all()
    )


class StudentSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Student
        fields = 'id', 'user', 'courses'
        view_name = 'students'
        extra_kwargs = {
            'user': {'view_name': 'courses:user-detail'},
        }

    courses = serializers.HyperlinkedRelatedField(
        view_name='courses:course-detail',
        many=True,
        read_only=False,
        queryset=Course.objects.all()
    )


class CourseSerializer(serializers.ModelSerializer):

    class Meta:
        model = Course
        fields = 'id', 'title', 'description', 'created_at', 'published_at', 'edited_at', 'teachers', 'students'
        view_name = 'courses'

    teachers = serializers.HyperlinkedRelatedField(
        view_name='courses:teacher-detail',
        many=True,
        read_only=False,
        queryset=Teacher.objects.all().select_related('user')
    )
    students = serializers.HyperlinkedRelatedField(
        view_name='courses:student-detail',
        many=True,
        read_only=False,
        queryset=Student.objects.all().select_related('user')
    )
