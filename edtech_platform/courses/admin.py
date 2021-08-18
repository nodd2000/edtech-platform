from django.contrib import admin

from .models import Teacher, Student, Course


@admin.register(Teacher)
class TeacherAdmin(admin.ModelAdmin):
    list_display = 'id', 'user', 'bio'


@admin.register(Student)
class StudentAdmin(admin.ModelAdmin):
    list_display = 'id', 'user'


@admin.register(Course)
class CourseAdmin(admin.ModelAdmin):
    list_display = 'title', 'description', 'published_at', 'created_at', 'edited_at'

    def short_desc(self, obj: Course):
        if len(obj.description) < 40:
            return obj.description
        return f"{obj.description[:36]}..."