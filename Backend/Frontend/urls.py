from django.urls import path, include
from . import views
from rest_framework.routers import DefaultRouter

router = DefaultRouter()
router.register('posts', views.PostViewSet)
router.register('funds', views.FundViewSet)
router.register('reports', views.ReportViewSet)
router.register('experiences', views.ExperienceViewSet)
router.register('contactus', views.ContactusViewSet)
router.register('users', views.UserViewSet)


urlpatterns = [
    path('Frontend/', include(router.urls)),
    path('', views.index),
    # path('Posts/', views.post_list)
]
