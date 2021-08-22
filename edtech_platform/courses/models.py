from django.contrib.auth import get_user_model
from django.db import models


class Teacher(models.Model):
    user = models.OneToOneField(get_user_model(), on_delete=models.PROTECT)

    bio = models.TextField(default="", blank=True)

    def __str__(self):
        return f"Teacher <{self.user}>"


class Student(models.Model):
    user = models.OneToOneField(get_user_model(), on_delete=models.PROTECT)

    def __str__(self):
        return f"Student <{self.user}>"


class Course(models.Model):

    title = models.CharField(max_length=120, null=False, default="", blank=False)
    description = models.TextField(default="", blank=True)
    created_at = models.DateTimeField(auto_now_add=True)
    published_at = models.DateTimeField(null=True, blank=True)
    edited_at = models.DateTimeField(auto_now=True)
    img_url = models.TextField(default="", blank=True)

    teachers = models.ManyToManyField(Teacher, related_name='courses')
    students = models.ManyToManyField(Student, null=True, blank=True, related_name='courses')

    def __str__(self):
        return f"Course {self.title!r}"
