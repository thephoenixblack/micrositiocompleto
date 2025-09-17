from django.db import models

class Libro(models.Model):
    titulo = models.CharField(max_length=150)
    autor = models.CharField(max_length=100)
    descripcion = models.TextField(blank=True)
    imagen = models.URLField()
    video = models.URLField()
    lat = models.FloatField()
    lng = models.FloatField()

    def __str__(self):
        return self.titulo