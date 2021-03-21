from django.contrib import admin
from .models import Post
# admin.site.register(Posts)


@admin.register(Post)
class PostModel(admin.ModelAdmin):
    list_filter = ('title', 'description', 'upload')
    list_display = ('title', 'description', 'upload')
