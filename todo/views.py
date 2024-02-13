# from django.shortcuts import render
from django.shortcuts import render, redirect
from .forms import TodoModelForm
from .models import Todo
from django.urls import reverse


def home(request):
    todos = Todo.objects.all()
    return render(request, 'home.html', {'todos': todos})

def create(request):
    todos = Todo.objects.all()
    return render(request, 'create.html', {'todos': todos})

def create_new(request):
    if request.method == 'POST':
        form = TodoModelForm(request.POST)
        if form.is_valid():
            form.save()
            return redirect(reverse('home'))
    else:
        form = TodoModelForm()
    # print(form)
    return render(request, 'create.html', {'form': form})
