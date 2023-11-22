# app/urls.py
from django.urls import path
from .views import TrustedPartnerListView, ImageListView

# app/function urls
urlpatterns = [
    path('logos/', TrustedPartnerListView.as_view(), name='partners-list'),
    path('sorted/', ImageListView.as_view(), name='sorted-partners-list'),
]
