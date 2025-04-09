from django.urls import path
from .views import SignupView

# defining url patterns for the accounts app
urlpatterns = [
    # route for the signup API
    path('signup/',SignupView.as_view(), name = 'signup'),
]