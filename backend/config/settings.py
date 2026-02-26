import os
from pathlib import Path
from datetime import timedelta
import dj_database_url  # Très important pour la base de données Render

# 1. Chemins de base
BASE_DIR = Path(__file__).resolve().parent.parent

# 2. Sécurité (Variables d'environnement)
SECRET_KEY = os.getenv('DJANGO_SECRET_KEY', 'django-insecure-fallback-local')

# Sur Render, DEBUG doit être False. En local, il sera True si tu as un .env
DEBUG = os.getenv('DEBUG', 'False') == 'True'

ALLOWED_HOSTS = ["site-articles.onrender.com", "localhost", "127.0.0.1"]

# 3. Applications
INSTALLED_APPS = [
    'cloudinary_storage', 
    'django.contrib.staticfiles', 
    'cloudinary',
    'django.contrib.admin',
    'django.contrib.auth',
    'django.contrib.contenttypes',
    'django.contrib.sessions',
    'django.contrib.messages',
    'whitenoise.runserver_nostatic',
    "rest_framework",
    "corsheaders",
    "core",
]

# 4. Middlewares (L'ordre est crucial pour WhiteNoise et CORS)
MIDDLEWARE = [
    'django.middleware.security.SecurityMiddleware',
    'whitenoise.middleware.WhiteNoiseMiddleware', 
    'corsheaders.middleware.CorsMiddleware',
    'django.middleware.common.CommonMiddleware',
    'django.middleware.csrf.CsrfViewMiddleware',
    'django.contrib.sessions.middleware.SessionMiddleware',
    'django.contrib.auth.middleware.AuthenticationMiddleware',
    'django.contrib.messages.middleware.MessageMiddleware',
    'django.middleware.clickjacking.XFrameOptionsMiddleware',
]

ROOT_URLCONF = 'config.urls'

TEMPLATES = [
    {
        'BACKEND': 'django.template.backends.django.DjangoTemplates',
        'DIRS': [os.path.join(BASE_DIR, 'templates')],
        'APP_DIRS': True,
        'OPTIONS': {
            'context_processors': [
                'django.template.context_processors.debug',
                'django.template.context_processors.request',
                'django.contrib.auth.context_processors.auth',
                'django.contrib.messages.context_processors.messages',
            ],
        },
    },
]

# 5. Base de données (Hybride SQLite / PostgreSQL)
DATABASES = {
    'default': dj_database_url.config(
        default=f"sqlite:///{BASE_DIR / 'db.sqlite3'}",
        conn_max_age=600
    )
}

# 6. Gestion des fichiers (Syntaxe Django 4.2/5.0+)
STATIC_URL = 'static/'
STATIC_ROOT = os.path.join(BASE_DIR, 'staticfiles')
STATICFILES_DIRS = [os.path.join(BASE_DIR, 'static')]



STORAGES = {
    "default": {
        "BACKEND": "cloudinary_storage.storage.MediaCloudinaryStorage",
    },
    "staticfiles": {
        "BACKEND": "whitenoise.storage.CompressedManifestStaticFilesStorage",
    },
}

# 7. Cloudinary
CLOUDINARY_STORAGE = {
    'CLOUD_NAME': os.getenv('CLOUDINARY_CLOUD_NAME'),
    'API_KEY': os.getenv('CLOUDINARY_API_KEY'),
    'API_SECRET': os.getenv('CLOUDINARY_API_SECRET'),
}

# 8. Email
EMAIL_BACKEND = 'django.core.mail.backends.smtp.EmailBackend'
EMAIL_HOST = 'smtp.gmail.com'
EMAIL_PORT = 587
EMAIL_USE_TLS = True
EMAIL_HOST_USER = 'bouye1978saturnin@gmail.com'
EMAIL_HOST_PASSWORD = os.getenv('EMAIL_PASSWORD')

# 9. CORS & Sécurité
CORS_ALLOW_ALL_ORIGINS = True  # À restreindre plus tard pour la sécurité
# AJOUTE CES DEUX LIGNES pour satisfaire le plugin Cloudinary qui fait l'erreur
STATICFILES_STORAGE = 'whitenoise.storage.CompressedManifestStaticFilesStorage'
DEFAULT_FILE_STORAGE = 'cloudinary_storage.storage.MediaCloudinaryStorage'