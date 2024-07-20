from rest_framework.response import Response
from django.views.decorators.csrf import csrf_exempt
from rest_framework.permissions import IsAuthenticated
from rest_framework.decorators import api_view, permission_classes
from django.shortcuts import render

from .services import todo_service

# Create your views here.

@csrf_exempt
@permission_classes([IsAuthenticated])
@api_view(['GET', 'POST'])
def HomeTodoView(request):
    if request.method == 'GET':
        out_data,message = todo_service.getAllTodo()
        return Response({"data":out_data,"message":message},status=210)
    elif request.method == 'POST':
        data = request.data
        out_data,message = todo_service.createNewTodo(data)
        return Response({"data":out_data,"message":message},status=210)
        

@csrf_exempt
@permission_classes([IsAuthenticated])
@api_view(['GET', 'POST', 'DELETE'])
def EachTodoView(request,id):
    if request.method == 'GET':
        out_data,message = todo_service.getTodo(id)
        return Response({"data":out_data,"message":message},status=210)
    elif request.method == 'POST':
        data = request.data
        out_data,message = todo_service.updateTodo(id,data)
        return Response({"data":out_data,"message":message},status=210)
    elif request.method == 'DELETE':
        out_data,message = todo_service.deleteTodo(id)
        return Response({"data":out_data,"message":message},status=210)
