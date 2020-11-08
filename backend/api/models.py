from django.db import models
from imagekit.models import ProcessedImageField
from imagekit.processors import ResizeToFit, Adjust, ResizeToFill

# Create your models here.

class Car(models.Model):
    brand = models.CharField('Марка машины', max_length=100)
    rare = models.IntegerField('Редкость')
    visited = models.BooleanField('Встречалась ли')

    def __str__(self):
        brand = self.brand
        return brand


class Photo(models.Model):
    image = ProcessedImageField(
        upload_to='cars',
        processors=[ResizeToFill(300, 200)],
        format='JPEG',
        options={'quality': 100},
    )
    title = models.CharField('Заголовок', max_length=100)
    car = models.ForeignKey(Car, on_delete=models.CASCADE, related_name='photos')
    date  = models.DateTimeField('Время', auto_now_add=True)
