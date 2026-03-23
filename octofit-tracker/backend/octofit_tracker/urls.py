"""octofit_tracker URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/4.1/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
import os
from django.contrib import admin
from django.urls import path, include
from .views import api_root, router


from rest_framework.reverse import reverse
from django.http import JsonResponse

def api_root_with_env(request, format=None):
    codespace_name = os.environ.get('CODESPACE_NAME')
    if codespace_name:
        base_url = f"https://{codespace_name}-8000.app.github.dev"
    else:
        base_url = "http://localhost:8000"
    # Gera URLs absolutas para cada endpoint
    api_urls = {
        'users': base_url + reverse('user-list'),
        'teams': base_url + reverse('team-list'),
        'activities': base_url + reverse('activity-list'),
        'leaderboard': base_url + reverse('leaderboard-list'),
        'workouts': base_url + reverse('workout-list'),
    }
    return JsonResponse(api_urls)

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/', api_root_with_env, name='api-root'),
    path('api/', include(router.urls)),
    path('', api_root_with_env),
]
