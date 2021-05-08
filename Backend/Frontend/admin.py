from django.contrib import admin
from .models import Post, Fund
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
