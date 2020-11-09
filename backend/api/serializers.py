from rest_framework import serializers
from .models import Car, Photo


class PhotoSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Photo
        fields = ('__all__')


class CarSerializer(serializers.HyperlinkedModelSerializer):
    # photos = serializers.StringRelatedField(many=True)
    photos = PhotoSerializer(many=True, read_only=True)
    class Meta:
        model = Car
        fields = ('url', 'id', 'brand', 'rare', 'visited', 'photos')
