from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from django.contrib.auth.models import User
from .serializers import UserSignupSerializer

class SignupView(APIView):
    def post(self, request):
        try:
            # Optional: Check if username already exists
            username = request.data.get('username')
            email = request.data.get('email')

            if username and User.objects.filter(username=username).exists():
                return Response({"error": "Username already exists."}, status=status.HTTP_409_CONFLICT)

            if email and User.objects.filter(email=email).exists():
                return Response({"error": "Email already exists."}, status=status.HTTP_409_CONFLICT)

            # Initialize the serializer with the request data
            serializer = UserSignupSerializer(data=request.data)

            # Validate and save if valid
            if serializer.is_valid():
                serializer.save()
                return Response({"message": "User created successfully."}, status=status.HTTP_201_CREATED)

            # If serializer is not valid
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

        except Exception as e:
            # Catch unexpected exceptions
            return Response(
                {"error": "Internal Server Error", "details": str(e)},
                status=status.HTTP_500_INTERNAL_SERVER_ERROR
            )