# from django.shortcuts import render
from django.shortcuts import render, redirect, get_object_or_404
from .forms import TodoModelForm
from .models import Todo
from django.urls import reverse
from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt


def home(request):
    todos = Todo.objects.all()
    return render(request, 'home.html', {'todos': todos})

def create(request):
    todos = Todo.objects.all()
    form = TodoModelForm()
    return render(request, 'create.html', {'todos': todos, 'form': form})

def create_new(request):
    if request.method == 'POST':
        form = TodoModelForm(request.POST)
        if form.is_valid():
            form.save()
            return redirect(reverse('home'))
    else:
        form = TodoModelForm()
    return render(request, 'create.html', {'form': form})

def edit_todo(request, pk):
    record = get_object_or_404(Todo, pk=pk)
    form = TodoModelForm(instance=record)  # Pass the instance to the form
    return render(request, 'edit.html', {'form':form})

def update_task(request, pk):
    record = get_object_or_404(Todo, pk=pk)
    if request.method == 'POST':
        form = TodoModelForm(request.POST, instance=record)
        if form.is_valid():
            form.save()
            # return redirect('todo/home/')
            return redirect('home')

    else:
        form = TodoModelForm()
    return render(request, 'edit.html', {'form': form})

@csrf_exempt
def delete_task(request, pk):
    task = get_object_or_404(Todo, pk=pk)

    if request.method == 'POST':
        task.delete()
        return JsonResponse({"success":True}, status=200)
    return JsonResponse({"success":False}, status=400)