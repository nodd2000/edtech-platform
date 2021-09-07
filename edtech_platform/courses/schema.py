import graphene
from django.contrib.auth import get_user_model
from graphene_django import DjangoObjectType
from django.shortcuts import get_object_or_404

from .models import Teacher, Course, Student


class UserType(DjangoObjectType):
    class Meta:
        model = get_user_model()
        fields = ("id", "username")


class TeacherType(DjangoObjectType):
    class Meta:
        model = Teacher
        fields = ("id", "user", "bio", "courses", "img_url")


class StudentType(DjangoObjectType):
    class Meta:
        model = Student
        fields = ("id", "user", "courses")


class CourseType(DjangoObjectType):
    class Meta:
        model = Course
        fields = ("id", "title", "description", "img_url",
                  "created_at", "published_at", "edited_at",
                  "teachers", "students")


class Query(graphene.ObjectType):
    all_users = graphene.List(UserType)
    all_teachers = graphene.List(TeacherType)
    all_students = graphene.List(StudentType)
    all_courses = graphene.List(CourseType)

    course_by_title = graphene.Field(CourseType, title=graphene.String(required=True))

    def resolve_course_by_title(self, info, title):
        return get_object_or_404(Course, title=title)

    def resolve_all_users(self, info):
        return get_user_model().objects.all()

    def resolve_all_teachers(self, info):
        return Teacher.objects.all()

    def resolve_all_students(self, info):
        return Student.objects.all()

    def resolve_all_courses(self, info):
        return Course.objects.all()


schema = graphene.Schema(query=Query)
