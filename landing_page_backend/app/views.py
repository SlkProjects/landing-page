from django.shortcuts import render
from rest_framework.views import APIView
from rest_framework import generics
from rest_framework.response import Response
from rest_framework import status
from .models import TrustedPartner
from .serializers import TrustedPartnerSerializer

# Create your views here.
class TrustedPartnerListView(generics.ListAPIView):
    queryset = TrustedPartner.objects.all()
    serializer_class = TrustedPartnerSerializer

class ImageListView(APIView):
    def get(self, request):
        sort_order = request.query_params.get('sort_order', 'asc')
        if sort_order not in ['asc', 'desc']:
            return Response({'error': 'Invalid sort order'}, status=status.HTTP_400_BAD_REQUEST)

        images = TrustedPartner.objects.all().order_by(f'sort_order{ "" if sort_order == "desc" else ""}')
        serializer = TrustedPartnerSerializer(images, many=True)
        return Response(serializer.data)