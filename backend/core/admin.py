from django.contrib import admin

from core.models import Project

# Register your models here.
class ProjectAdmin(admin.ModelAdmin):
    list_display = ('title', 'created_at', 'description', 'technologies', 'github_link', 'live_demo_link')
  

admin.site.register(Project, ProjectAdmin)