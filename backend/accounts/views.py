from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from .serializers import UserSignupSerializer

# class for handling the user signup process
class SignupView(APIView):
    # post method to handle requests
    def post(self, request):
        # initialize the serializer with the incoming request data
        serializer = UserSignupSerializer(data = request.data)
        # checking if the data is valid 
        if serializer.is_valid():
            # if the data is valid, save the user to the database
            serializer.save()
            # return a successful response with a message and status code
            return Response({"message": "User created successfully."}, status = status.HTTP_201_CREATED)
        # if the data is invalid, it returns the errors along with the status code
        return Response(serializer.errors, status = status.HTTP_400_BAD_REQUEST)