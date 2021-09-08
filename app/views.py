from django.http import JsonResponse
from rest_framework import status
from rest_framework.decorators import api_view
from rest_framework.parsers import JSONParser
from app.models import Memo
from app.serializers import MemoSerializer

@api_view(['GET', 'POST'])
def memo_list(request):
    if request.method == 'GET':
        memos = Memo.objects.all()
        serializer = MemoSerializer(memos, many=True)
        return JsonResponse(serializer.data, safe=False, status=status.HTTP_200_OK)
    if request.method == 'POST':
        data = JSONParser().parse(request)
        serializer = MemoSerializer(data=data)
        if serializer.is_valid():
            serializer.save()
            return JsonResponse(serializer.data, status=status.HTTP_201_CREATED)
        return JsonResponse(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

@api_view(['GET', 'PUT', 'DELETE'])
def memo_detail(request, pk):
    try:
        memo=Memo.objects.get(pk=pk)
    except Memo.DoesNotExist:
        return JsonResponse(status=status.HTTP_404_NOT_FOUND)
    
    if request.method == 'GET':
        serializer = MemoSerializer(memo)
        return JsonResponse(serializer.data, status=status.HTTP_200_OK)

    if request.method == 'PUT':
        data = JSONParser().parse(request)
        serializer = MemoSerializer(memo, data=data)
        if serializer.is_valid():
            serializer.save()
            return JsonResponse(serializer.data, status=status.HTTP_200_OK)
        return JsonResponse(serializer.errors, status=status.HTTP_400_BAD_REQUEST)