# app/urls.py
from django.conf import settings
from django.conf.urls.static import static
from django.urls import path
from .views import TrustedPartnerListView

urlpatterns = [
    path('logos/', TrustedPartnerListView.as_view(), name='partners-list'),
]

# work around to gain access to images during development
if settings.DEBUG:
    urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)