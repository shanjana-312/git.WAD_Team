from django.contrib import admin
from .models import Post
# admin.site.register(Posts)


@admin.register(Post)
class PostModel(admin.ModelAdmin):
    list_filter = ('title','driveLink', 'description', 'upload')
    list_display = ('title', 'driveLink','description', 'upload')
