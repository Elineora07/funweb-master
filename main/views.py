from django.shortcuts import render


def main_index(request):
    return render(request, 'main/index.html')


def main_math(request):
    return render(request, 'games/math.html')


def main_catch(request):
    return render(request, 'games/catch.html')


def main_paper(request):
    return render(request, 'games/paper.html')