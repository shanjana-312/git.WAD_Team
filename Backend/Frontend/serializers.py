from rest_framework import serializers
from .models import Post
from django.contrib.auth.models import User
from rest_framework.authtoken.views import Token
# class PostSerializer(serializers.Serializer):
#     title = serializers.CharField(max_length=100)
#     description = serializers.CharField(max_length=400)
#     upload = serializers.ImageField(
#         max_length=None, use_url=True, allow_null=True, required=False)

#     def create(self, validated_data):
#         return Post.objects.create(validated_data)

#     def update(self, instance, validated_data):
#         instance.title = validated_data.get('title', instance.title)
#         instance.description = validated_data.get(
#             'description', instance.description)
#         instance.upload = validated_data.get(
#             'upload', instance.upload)
#         instance.save()
#         return instance


class PostSerializer(serializers.ModelSerializer):
    class Meta:
        model = Post
        fields = ['id', 'title', 'driveLink', 'description', 'upload']


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['id', 'username', 'password']
        extra_kwargs = {'password': {
            'write_only': True,
            'required': True
        }}

    def create(self, validated_data):
        user = User.objects.create_user(**validated_data)
        Token.objects.create(user=user)
        return user
