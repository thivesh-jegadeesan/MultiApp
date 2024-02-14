from django.db import models

class Todo(models.Model):
    title = models.CharField(max_length=100)
    description = models.CharField(max_length=500)
    completed = models.BooleanField(default=False)
    priority = models.IntegerField(choices=[(1, 'Low'), (2, 'Medium'), (3, 'High')])
    
    def __str__(self):
        return self.title