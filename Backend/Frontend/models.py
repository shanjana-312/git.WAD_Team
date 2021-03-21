from django.db import models

# Create your models here.


class Post(models.Model):
    title = models.CharField(max_length=100)
    description = models.TextField()
    upload = models.ImageField()

    def __str__(self):
        return self.title
