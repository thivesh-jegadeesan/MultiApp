from django.contrib.auth.models import User
from django.db import models

class TaskMaster(models.Model):
    title = models.CharField(max_length=255)
    created_by = models.ForeignKey(User, on_delete=models.CASCADE, related_name='created_tasks')
    created_date = models.DateTimeField(auto_now_add=True)
    updated_by = models.ForeignKey(User, on_delete=models.CASCADE, related_name='updated_tasks')
    updated_date = models.DateTimeField(auto_now=True)

    # Optional additional fields if needed:
    # status = models.CharField(max_length=50, choices=[('to-do', 'To Do'), ('in-progress', 'In Progress'), ('done', 'Done')])
    # priority = models.IntegerField(choices=[(1, 'Low'), (2, 'Medium'), (3, 'High')])
    # description = models.TextField(blank=True)

    def __str__(self):
        return f"{self.title} - Created by: {self.created_by}"
