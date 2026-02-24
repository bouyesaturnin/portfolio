# 1. Imports nécessaires
import os
from pathlib import Path
from datetime import timedelta
# Ajoute ceci pour charger les variables d'environnement si tu testes en local
# pip install python-dotenv
# from dotenv import load_dotenv
# load_dotenv()

# ... (BASE_DIR reste pareil)

# 2. Sécurité : Utilise des variables d'environnement
SECRET_KEY = os.getenv('DJANGO_SECRET_KEY', 'django-insecure-fallback-pour-le-local')

DEBUG = os.getenv('DEBUG', 'False') == 'True' # Sera False sur Render par défaut

# 3. Hosts et CORS
ALLOWED_HOSTS = ["site-articles.onrender.com", "localhost", "127.0.0.1"]

# Important : Si tu mets ALLOW_ALL = True, tu n'as pas besoin de CORS_ALLOWED_ORIGINS
CORS_ALLOW_ALL_ORIGINS = True 

# 4. Apps & Middleware (ORDRE CRUCIAL)
INSTALLED_APPS = [
    'django.contrib.admin',
    'django.contrib.auth',
    'django.contrib.contenttypes',
    'django.contrib.sessions',
    'django.contrib.messages',
    'whitenoise.runserver_nostatic', # Optionnel : aide pour le développement
    'django.contrib.staticfiles',
    'cloudinary_storage', # Doit être AVANT staticfiles
    'cloudinary',
    "rest_framework",
    "corsheaders",
    "core",
]

MIDDLEWARE = [
    'django.middleware.security.SecurityMiddleware',
    'whitenoise.middleware.WhiteNoiseMiddleware', # <-- DOIT ÊTRE ICI
    'corsheaders.middleware.CorsMiddleware', # <-- DOIT ÊTRE AVANT CommonMiddleware
    'django.middleware.common.CommonMiddleware',
    'django.contrib.sessions.middleware.SessionMiddleware',
    'django.middleware.csrf.CsrfViewMiddleware',
    'django.contrib.auth.middleware.AuthenticationMiddleware',
    'django.contrib.messages.middleware.MessageMiddleware',
    'django.middleware.clickjacking.XFrameOptionsMiddleware',
]

# 5. Email (Sécurisé)
EMAIL_BACKEND = 'django.core.mail.backends.smtp.EmailBackend'
EMAIL_HOST = 'smtp.gmail.com'
EMAIL_PORT = 587
EMAIL_USE_TLS = True
EMAIL_HOST_USER = 'bouye1978saturnin@gmail.com'
EMAIL_HOST_PASSWORD = os.getenv('EMAIL_PASSWORD') # Configure 'EMAIL_PASSWORD' sur Render

# 6. Cloudinary (Vérifie bien que 'cloudinary' et 'django-cloudinary-storage' sont installés)
CLOUDINARY_STORAGE = {
    'CLOUD_NAME': os.getenv('CLOUDINARY_CLOUD_NAME'),
    'API_KEY': os.getenv('CLOUDINARY_API_KEY'),
    'API_SECRET': os.getenv('CLOUDINARY_API_SECRET'),
}

DEFAULT_FILE_STORAGE = 'cloudinary_storage.storage.MediaCloudinaryStorage'