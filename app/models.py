from django.db import models

# Create your models here.
class Memo(models.Model):
    title = models.CharField(max_length=32)
    content = models.TextField(max_length=200)
    created_at = models.DateTimeField(auto_now_add=True)