from django.db import models

# Create your models here.

class TrustedPartner(models.Model):
    name = models.CharField(max_length=255)
    logo = models.ImageField(upload_to='partner_logos/')
    category = models.CharField(max_length=255 )
    url = models.URLField()
    sort_order = models.IntegerField(default=0)

    def __str__(self):
        return self.name