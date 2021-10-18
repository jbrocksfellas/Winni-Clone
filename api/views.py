from django.shortcuts import render
from .serializers import RoomSerializer
from .models import Room
from rest_framework import generics, status
from rest_framework.views import APIView
from rest_framework.response import Response

class RoomView(generics.ListAPIView):
    queryset = Room.objects.all()
    serializer_class = RoomSerializer