from django.db import models

# Create your models here.
class Project(models.Model):
    title = models.CharField(max_length=100)
    description = models.TextField()
    image = models.ImageField(upload_to='portfolio/')
    technologies = models.CharField(max_length=200) # Ex: "React, Django, Tailwind"
    github_link = models.URLField(blank=True)
    live_demo_link = models.URLField(blank=True)
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.title
    



class ContactMessage(models.Model): # <--- Vérifie ce nom précisément
    name = models.CharField(max_length=100)
    email = models.EmailField()
    message = models.TextField()
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"Message de {self.name}"