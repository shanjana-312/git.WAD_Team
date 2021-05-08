from django.urls import path, include
from . import views
from rest_framework.routers import DefaultRouter

router = DefaultRouter()
router.register('posts', views.PostViewSet)
router.register('funds', views.FundViewSet)
router.register('users', views.UserViewSet)


urlpatterns = [
    path('Frontend/', include(router.urls)),
    path('', views.index),
    # path('Posts/', views.post_list)
]
