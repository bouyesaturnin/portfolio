import os
from pathlib import Path
from datetime import timedelta

# BASE_DIR doit être défini au début
BASE_DIR = Path(__file__).resolve().parent.parent

# 2. Sécurité
SECRET_KEY = os.getenv('DJANGO_SECRET_KEY', 'django-insecure-fallback-pour-le-local')
# DEBUG = True  # Forcé à True pour corriger les erreurs en local
DEBUG = False

# 3. Hosts et CORS
ALLOWED_HOSTS = ["site-articles.onrender.com", "localhost", "127.0.0.1"]
CORS_ALLOW_ALL_ORIGINS = True 

# 4. Apps & Middleware
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

MIDDLEWARE = [
    'django.middleware.security.SecurityMiddleware',
    'whitenoise.middleware.WhiteNoiseMiddleware', 
    'corsheaders.middleware.CorsMiddleware',
    'django.middleware.common.CommonMiddleware',
    'django.contrib.sessions.middleware.SessionMiddleware',
    'django.middleware.csrf.CsrfViewMiddleware',
    'django.contrib.auth.middleware.AuthenticationMiddleware',
    'django.contrib.messages.middleware.MessageMiddleware',
    'django.middleware.clickjacking.XFrameOptionsMiddleware',
]

TEMPLATES = [
    {
        'BACKEND': 'django.template.backends.django.DjangoTemplates',
        'DIRS': [os.path.join(BASE_DIR, 'templates')], # Recommandé
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

# --- AJOUT INDISPENSABLE : BASE DE DONNÉES ---
# Si vous n'avez pas ce bloc, l'admin fera une erreur 500
DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.sqlite3',
        'NAME': BASE_DIR / 'db.sqlite3',
    }
}

ROOT_URLCONF = 'config.urls'

# 5. Email
EMAIL_BACKEND = 'django.core.mail.backends.smtp.EmailBackend'
EMAIL_HOST = 'smtp.gmail.com'
EMAIL_PORT = 587
EMAIL_USE_TLS = True
EMAIL_HOST_USER = 'bouye1978saturnin@gmail.com'
EMAIL_HOST_PASSWORD = os.getenv('EMAIL_PASSWORD')

# 6. Cloudinary
CLOUDINARY_STORAGE = {
    'CLOUD_NAME': os.getenv('CLOUDINARY_CLOUD_NAME'),
    'API_KEY': os.getenv('CLOUDINARY_API_KEY'),
    'API_SECRET': os.getenv('CLOUDINARY_API_SECRET'),
}
DEFAULT_FILE_STORAGE = 'cloudinary_storage.storage.MediaCloudinaryStorage'

# --- 7. FICHIERS STATIQUES (Lignes qui manquaient) ---
STATIC_URL = '/static/'
STATIC_ROOT = os.path.join(BASE_DIR, 'staticfiles')
STATICFILES_DIRS = [os.path.join(BASE_DIR, 'static')]

# Support de WhiteNoise pour servir les fichiers CSS/JS
STATICFILES_STORAGE = 'whitenoise.storage.CompressedManifestStaticFilesStorage'