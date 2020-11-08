from rest_framework import viewsets
from rest_framework import permissions
from .serializers import CarSerializer, PhotoSerializer

from .models import Car, Photo
from django_filters import rest_framework as filters


class CarsViewSet(viewsets.ModelViewSet):
    """
    API endpoint that allows posts to be viewed or edited.
    """
    queryset = Car.objects.all()
    serializer_class = CarSerializer


class PhotosViewSet(viewsets.ModelViewSet):
    """
    API endpoint that allows posts to be viewed or edited.
    """
    queryset = Photo.objects.all()
    serializer_class = PhotoSerializer