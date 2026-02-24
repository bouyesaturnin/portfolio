from django.contrib import admin
from django.urls import path, include

urlpatterns = [
    # Remplace admin.site.name par admin.site.urls
    path('admin/', admin.site.urls), 
    path('api/', include('core.urls')),
]
