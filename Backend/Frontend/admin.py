from django.contrib import admin
from .models import Post, Fund, Report
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
