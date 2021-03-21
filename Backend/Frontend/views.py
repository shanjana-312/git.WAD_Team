from django.shortcuts import render

# Create your views here.
# from django.shortcuts import render
from .models import Post
from .serializers import PostSerializer, UserSerializer
# from django.http import JsonResponse
# from rest_framework.parsers import JSONParser
from rest_framework import viewsets
from django.shortcuts import get_object_or_404
from rest_framework.authentication import TokenAuthentication
from rest_framework.permissions import IsAuthenticated
from django.contrib.auth.models import User


def index(request):
    return render(request, 'build/index.html')


class PostViewSet(viewsets.ModelViewSet):
    queryset = Post.objects.all()
    serializer_class = PostSerializer
    authentication_classes = (TokenAuthentication)
    permission_classes = [IsAuthenticated]
# def post_list(request):
#     if request.method == 'GET':
#         posts = Post.object.all()
#         serializer = PostSerializer(posts, many=True)
#         return JsonResponse(serializer.data, safe=False)

#     elif request.method == 'POST':
#         data = JSONParser().parse(request)
#         serializer = PostSerializer(data=data)
#         if serializer.is_valid():
#             serializer.save()
#             return JsonResponse(serializer.data, status=201)
#             return JsonResponse(serializer.errors, status=400)


class UserViewSet(viewsets.ModelViewSet):
    queryset = User.objects.all()
    serializer_class = UserSerializer
