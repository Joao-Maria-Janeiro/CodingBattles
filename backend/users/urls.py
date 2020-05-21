from django.urls import path, include
from . import views 
from django.views.decorators.csrf import csrf_exempt


urlpatterns = [
    path('login', csrf_exempt(views.login), name="get-token"),
    path('signup', csrf_exempt(views.signup), name="signup"),
    path('languages', csrf_exempt(views.get_all_coding_languages), name="languages"),
]
