from django.urls import path
from .views import *

urlpatterns = [
    path("home/", home,  name="home"),
    path("create/", create,  name="create"),
    path('create-new-todo/', create_new, name='create_new'),

]
