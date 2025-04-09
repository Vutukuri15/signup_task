# importing the default django user model and the serializers module from DRF
from django.contrib.auth.models import User
from rest_framework import serializers

# serializer class for user signup
class UserSignupSerializer(serializers.ModelSerializer):
    # define the password field as write-only to ensure it's not visible in responses
    password = serializers.CharField(write_only=True)
    
    # to configure serializer behavior
    class Meta:
        model = User
        fields = ['username', 'email', 'password'] # fields
        
    # overriding the create method to handle user creation
    def create(self, validated_data):
        user = User.objects.create_user(
            username = validated_data['username'], # username from validated data
            email = validated_data['email'], # email form validated data
            password = validated_data['password'] # password from validated data 
        )
        # return the created user object
        return user