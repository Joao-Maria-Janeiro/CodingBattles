from django.contrib import admin
from .models import UserProfile, Language

# Register your models here.
admin.site.register(UserProfile)
admin.site.register(Language)