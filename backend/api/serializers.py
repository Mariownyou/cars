from rest_framework import serializers
from .models import Car, Photo


class CarSerializer(serializers.HyperlinkedModelSerializer):
    photos = serializers.StringRelatedField(many=True)
    class Meta:
        model = Car
        fields = ('url', 'id', 'brand', 'rare', 'visited', 'photos')


class PhotoSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Photo
        fields = ('__all__')
