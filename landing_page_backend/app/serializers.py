# app/serializers.py
from rest_framework import serializers
from .models import TrustedPartner

class TrustedPartnerSerializer(serializers.ModelSerializer):
    class Meta:
        model = TrustedPartner
        fields = '__all__'
