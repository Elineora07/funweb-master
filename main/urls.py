from django.urls import path
from main.views import main_index, main_math, main_catch, main_paper

urlpatterns = [
    path('', main_index, name='index'),
    path('math/', main_math, name='math'),
    path('catch/', main_catch, name='catch'),
    path('paper/', main_paper, name='paper')
]