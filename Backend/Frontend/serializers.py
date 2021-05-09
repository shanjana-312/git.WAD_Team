from rest_framework import serializers
from .models import Post, Fund, Report, Experience, Contactus
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


class FundSerializer(serializers.ModelSerializer):
    class Meta:
        model = Fund
        fields = ['id', 'firstname', 'lastname', 'email', 'phonenumber',
                  'location', 'stage', 'industry', 'role', 'members', 'idea']


class ReportSerializer(serializers.ModelSerializer):
    class Meta:
        model = Report
        fields = ["id", "posttitle", "box1", "box2",
                  "box3", "box4", "box5", "details"]


class ExperienceSerializer(serializers.ModelSerializer):
    class Meta:
        model = Experience
        fields = ["id", "comment", "suggestions",
                  "questions", "rate", "remarks"]


class ContactusSerializer(serializers.ModelSerializer):
    class Meta:
        model = Contactus
        fields = ["id", "firstname", "lastname", "message"]


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['id', 'username', 'email', 'password']
        extra_kwargs = {'password': {
            'write_only': True,
            'required': True
        }}

    def create(self, validated_data):
        user = User.objects.create_user(**validated_data)
        Token.objects.create(user=user)
        return user
