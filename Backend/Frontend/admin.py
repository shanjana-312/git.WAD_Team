from django.contrib import admin
from .models import Post, Fund, Report, Experience, Contactus
# admin.site.register(Posts)


@admin.register(Post)
class PostModel(admin.ModelAdmin):
    list_filter = ('title', 'driveLink', 'description', 'upload')
    list_display = ('title', 'driveLink', 'description', 'upload')


@admin.register(Fund)
class FundModel(admin.ModelAdmin):

    list_filter = ('firstname', 'lastname', 'email', 'phonenumber',
                   'location', 'stage', 'industry', 'role', 'members', 'idea')
    list_display = ('firstname', 'lastname', 'email', 'phonenumber',
                    'location', 'stage', 'industry', 'role', 'members', 'idea')


@admin.register(Report)
class ReportModel(admin.ModelAdmin):
    list_filter = ('posttitle', 'box1', 'box2',
                   'box3', 'box4', 'box5', 'details')
    list_display = ('posttitle', 'box1', 'box2',
                    'box3', 'box4', 'box5', 'details')


@admin.register(Experience)
class ExperienceModel(admin.ModelAdmin):
    list_filter = ('comment', 'suggestions', 'questions',
                   'rate', 'remarks')
    list_display = ('comment', 'suggestions', 'questions',
                    'rate', 'remarks')


@admin.register(Contactus)
class ContactuModel(admin.ModelAdmin):
    list_filter = ('firstname', 'lastname', 'message')
    list_display = ('firstname', 'lastname', 'message')
