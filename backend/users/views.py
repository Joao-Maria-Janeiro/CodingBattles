from django.shortcuts import render
import json
from rest_framework.authtoken.models import Token
from django.contrib.auth.models import User
from django.contrib.auth import authenticate
from django.http import HttpResponse, JsonResponse
from .models import Language

# Helper methods
def user_exists(email):
    try:
        User.objects.get(email = email)
        return True
    except Exception as e:
        return False


# Views
def login(request):
    if request.method == 'POST':
        body_unicode = request.body.decode('utf-8')
        body = json.loads(body_unicode)
        email = body['email']
        password = body['password']
        if not user_exists(email):
            return JsonResponse({"error":"The user doesn't exist or the username and password don't match"})
        user = User.objects.get(email = email)
        authenticated = authenticate(username=user.username, password=password)
        if authenticated is not None:
            token = Token.objects.get_or_create(user=user)
            return JsonResponse({"token": token[0].key,"username": user.username})
        else:
            return JsonResponse({"error":"The user doesn't exist or the username and password don't match"})
    else:
        return JsonResponse({"error":"POST request only"})

def signup(request):
    body_unicode = request.body.decode('utf-8')
    body = json.loads(body_unicode)
    if user_exists(body['email']):
        return JsonResponse({'error': 'This email has already been used'})
    user = None
    try:
        user = User.objects.create_user(body['username'], body['email'], body['password'])
    except:
        return JsonResponse({'error': 'Error creating the user. Please check the email, password and username'})
    user.first_name = body['first_name']
    user.last_name = body['last_name']
    user.save()
    try:
        user.userprofile.favourite_language = body['favourite_language']
        user.userprofile.ocupation = body['ocupation']
        user.userprofile.company = body['company']
        user.userprofile.known_languages.add(*Language.objects.filter(name__in=body['languages']))
        user.userprofile.save()
    except:
        return JsonResponse({'error': 'The user was created but you language preferences weren\'t saved. Please update them in the profile'})
    return JsonResponse({'error': ''})