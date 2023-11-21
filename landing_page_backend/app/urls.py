# app/urls.py
from django.urls import path
from .views import TrustedPartnerListView

# app/function urls
urlpatterns = [
    path('logos/', TrustedPartnerListView.as_view(), name='partners-list'),
]
