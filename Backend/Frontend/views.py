from django.shortcuts import render
from django.http import HttpResponse
from .models import Post, Fund, Report, Experience, Contactus
from .serializers import PostSerializer, UserSerializer, FundSerializer, ReportSerializer, ExperienceSerializer, ContactusSerializer
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
    # authentication_classes = (TokenAuthentication,)
    # permission_classes = [IsAuthenticated, ]

    def post(self, request, *args, **kwargs):
        title = request.data['title']
        driveLink = request.data['driveLink']
        description = request.data['description']
        upload = request.data['upload']
        Post.objects.create(
            title=title, driveLink=driveLink, description=description, upload=upload)
        return HttpResponse({'message': 'Posts Created'}, status=200)
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


class FundViewSet(viewsets.ModelViewSet):
    queryset = Fund.objects.all()
    serializer_class = FundSerializer

    def fund(self, request, *args, **kwargs):
        firstname = request.data['firstname']
        lastname = request.data['lastname']
        email = request.data['email']
        phonenumber = request.data['phonenumber']
        location = request.data['location']
        stage = request.data['stage']
        industry = request.data['industry']
        role = request.data['role']
        members = request.data['members']
        idea = request.data['idea']
        Fund.objects.create(firstname=firstname, lastname=lastname, email=email, phonenumber=phonenumber,
                            location=location, stage=stage, industry=industry, role=role, members=members, idea=idea)
        return HttpResponse({'message': 'Funds Created'}, status=200)


class ReportViewSet(viewsets.ModelViewSet):
    queryset = Report.objects.all()
    serializer_class = ReportSerializer

    def report(self, request, *args, **kwargs):
        posttitle = request.data['posttitle']
        box1 = request.data['box1']
        box2 = request.data['box2']
        box3 = request.data['box3']
        box4 = request.data['box4']
        box5 = request.data['box5']
        details = request.data['details']
        Report.objects.create(posttitle=posttitle, box1=box1, box2=box2,
                              box3=box3, box4=box4, box5=box5, details=details)
        return HttpResponse({'message': 'Report Added'}, status=200)


class ExperienceViewSet(viewsets.ModelViewSet):
    queryset = Experience.objects.all()
    serializer_class = ExperienceSerializer

    def experience(self, request, *args, **kwargs):
        comment = request.data['comment']
        suggestions = request.data['suggestions']
        questions = request.data['questions']
        rate = request.data['rate']
        remarks = request.data['remarks']
        Report.objects.create(comment=comment, suggestions=suggestions,
                              questions=questions, rate=rate, remarks=remarks)
        return HttpResponse({'message': 'Experience Added'}, status=200)


class ContactusViewSet(viewsets.ModelViewSet):
    queryset = Contactus.objects.all()
    serializer_class = ContactusSerializer

    def contactus(self, request, *args, **kwargs):
        firstname = request.data['firstname']
        lastname = request.data['lastname']
        message = request.data['message']
        Report.objects.create(firstname=firstname,
                              lastname=lastname, message=message)
        return HttpResponse({'message': 'Added'}, status=200)


class UserViewSet(viewsets.ModelViewSet):
    queryset = User.objects.all()
    serializer_class = UserSerializer
