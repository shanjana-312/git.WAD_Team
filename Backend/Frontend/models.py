from django.db import models

# Create your models here.


class Report(models.Model):
    posttitle = models.CharField(max_length=100)
    box1 = models.BooleanField("Violent content", default=False)
    box2 = models.BooleanField("Abusive conten", default=False)
    box3 = models.BooleanField("Harmful content", default=False)
    box4 = models.BooleanField("Spam", default=False)
    box5 = models.BooleanField("Nudity", default=False)
    details = models.TextField(max_length=300)

    def __str__(self):
        return self.posttitle


class Fund(models.Model):
    STAGE_CHOICES = (
        ("none", "Select"),
        ("Pre-Idea Stage", "Pre-Idea Stage"),
        ("Idea Stage", "Idea Stage"),
        ("Prototyping Stage", "Prototyping Stage"),
        ("MVP/Early Market", "MVP/Early Market"),
    )
    INDUSTRY_CHOICES = (
        ("none", "Select"),
        ("Information Technology", "Information Technology"),
        ("Tourism", "Tourism"),
        ("E-commerce", "E-commerce"),
        ("Education", "Education"),
        ("Services", "Services"),
        ("Textiles", "Textiles"),
        ("others", "others"),
    )
    ROLE_CHOICES = (
        ("none", "Select"),
        ("Founder", "Founder"),
        ("Team Leader", "Team Leader"),
        ("Investor", "Investor"),
        ("Mentor", "Mentor"),
        ("other", "other"),
    )
    MEMBERS_CHOICES = (
        ("none", "Select"),
        ("Just me", "Just me"),
        ("2 to 5 people", "2 to 5 people"),
        ("more than 5", "more than 5"),
    )

    firstname = models.CharField(max_length=100)
    lastname = models.CharField(max_length=100)
    email = models.EmailField(max_length=150)
    phonenumber = models.IntegerField()
    location = models.CharField(max_length=300, blank=True)
    stage = models.CharField(
        max_length=40, choices=STAGE_CHOICES, default="none")
    industry = models.CharField(
        max_length=40, choices=INDUSTRY_CHOICES, default="none")
    role = models.CharField(
        max_length=40, choices=ROLE_CHOICES, default="none")
    members = models.CharField(
        max_length=40, choices=MEMBERS_CHOICES, default="none")
    idea = models.TextField(max_length=300)

    def __str__(self):
        return self.firstname


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
