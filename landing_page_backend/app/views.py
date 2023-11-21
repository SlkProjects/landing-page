from django.shortcuts import render
from rest_framework import generics
from .models import TrustedPartner
from .serializers import TrustedPartnerSerializer

# Create your views here.
class TrustedPartnerListView(generics.ListAPIView):
    queryset = TrustedPartner.objects.all()
    serializer_class = TrustedPartnerSerializer