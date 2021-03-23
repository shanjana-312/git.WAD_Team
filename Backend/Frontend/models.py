from django.db import models

# Create your models here.


def upload_path(instance, filename):
    return '/'.join(['uploads', str(instance.title), filename])


class Post(models.Model):
    title = models.CharField(max_length=100)
    driveLink = models.URLField(max_length=400)
    description = models.TextField(max_length=300)
    upload = models.ImageField(
        blank=True, null=True, upload_to=upload_path)

    def __str__(self):
        return self.title
