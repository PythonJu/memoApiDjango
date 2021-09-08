from rest_framework import serializers
from app.models import Memo

class MemoSerializer(serializers.ModelSerializer):
    class Meta:
        model = Memo
        fields = [
            'id',
            'title',
            'content',
            'created_at'
        ]