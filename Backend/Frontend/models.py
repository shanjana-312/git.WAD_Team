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


class Fund(models.Model):
    firstname = models.CharField(max_length=100)
    lastname = models.CharField(max_length=100)
    email = models.EmailField(max_length=150)
    phonenumber = models.IntegerField()
    location = models.CharField(max_length=300)

    STAGE_CHOICES = (
        ("1", "none"),
        ("2", "Pre-Idea Stage"),
        ("3", "Idea Stage"),
        ("4", "Prototyping Stage"),
        ("5", "MVP/Early Market"),
    )

    stage = models.CharField(max_length=1, choices=STAGE_CHOICES)

    INDUSTRY_CHOICES = (
        ("1", "none"),
        ("2", "Information Technology"),
        ("3", "Tourism"),
        ("4", "E-Commerce"),
        ("5", "Education"),
        ("6", "Services"),
        ("7", "Textiles"),
        ("8", "others")

    )

    industry = models.CharField(max_length=1, choices=INDUSTRY_CHOICES)

    ROLE_CHOICES = (
        ("1", "none"),
        ("2", "Founder"),
        ("3", "Team Leader"),
        ("4", "Investor"),
        ("5", "Mentor"),
        ("6", "other")

    )

    role = models.CharField(max_length=1, choices=ROLE_CHOICES)

    MEMBERS_CHOICES = (
        ("1", "none"),
        ("2", "Just me"),
        ("3", "2 to 5 people"),
        ("4", "more than 5")

    )

    members = models.CharField(max_length=1, choices=MEMBERS_CHOICES)

    idea = models.TextField()

    def __str__(self):
        return self.firstname