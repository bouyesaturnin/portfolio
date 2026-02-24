from django.urls import path
from .views import ContactCreateView

urlpatterns = [
    # C'est cette URL que React va appeler
    path('contact/', ContactCreateView.as_view(), name='contact-create'),
]