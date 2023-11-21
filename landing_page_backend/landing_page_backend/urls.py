"""
URL configuration for landing_page_backend project.
"""
from django.conf import settings
from django.conf.urls.static import static
from django.contrib import admin
from django.urls import path, include

# Backend access points
urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/', include('app.urls')),
]

# work around to gain access to images during development
if settings.DEBUG:
    urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)