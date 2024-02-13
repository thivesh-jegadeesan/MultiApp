# forms.py
from django import forms
from .models import Todo

class TodoModelForm(forms.ModelForm):
    class Meta:
        model = Todo
        fields = ['title', 'description', 'completed'] 
        widgets = {
            'title': forms.TextInput(attrs={'placeholder': 'Enter the title'}),
            'description': forms.Textarea(attrs={'placeholder': 'Enter the description'}),
        }