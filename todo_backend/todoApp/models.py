from django.db import models

class BaseModel(models.Model):

    STATUS_CHOICES = (
        ("Active", 'active'),
        ("In-Active", 'inactive'),
        )
    
    id           = models.AutoField(primary_key=True,db_index=True)
    status       = models.CharField(choices=STATUS_CHOICES,default="Active",max_length=100)
    created_at   = models.DateTimeField(auto_now_add=True)
    updated_at   = models.DateTimeField(auto_now=True)

    class Meta:
        abstract = True

# Create your models here.
class TodoModel(BaseModel):

    title = models.CharField(max_length=255)
    description = models.TextField()
    completed = models.BooleanField(default=False)
    