from django.db import models
from django.contrib.auth import get_user_model
from django.db.models.signals import post_save, pre_delete
from django.contrib.auth.models import User
from django.conf import settings
from django.contrib.postgres.fields import ArrayField



User = get_user_model()

class Language(models.Model):
    name = models.CharField(max_length=50)

    def __str__(self):
        return self.name

class UserProfile(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    favourite_language = models.CharField(max_length=50)
    known_languages = models.ManyToManyField(Language, blank=True)
    ocupation = models.CharField(max_length=100)
    company = models.CharField(max_length=50)
    
    def __str__(self):
        return self.user.username
    
def post_save_profile_create(sender, instance, created, *args, **kwargs):
    if created:
        UserProfile.objects.get_or_create(user=instance)


post_save.connect(post_save_profile_create, sender=settings.AUTH_USER_MODEL)
