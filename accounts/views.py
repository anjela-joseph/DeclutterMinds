from django.shortcuts import render, redirect
from django.contrib.auth import authenticate, login, logout
from django.contrib.auth.forms import UserCreationForm, AuthenticationForm
from django.http import HttpResponse

from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework_simplejwt.tokens import RefreshToken
from rest_framework import status
from .serializers import SignupSerializer

from django.views.decorators.csrf import csrf_exempt
from django.utils.decorators import method_decorator
from rest_framework.decorators import api_view, permission_classes



# accounts/views.py
from rest_framework.permissions import IsAuthenticated
from django.core.mail import send_mail

@api_view(['POST'])
@permission_classes([IsAuthenticated])
def send_quiz_email(request):
    user = request.user
    answers = request.data.get('answers', [])
    yes_count = answers.count('yes')

    if yes_count <= 2:
        message = "You're beginning to notice the misalignment..."
    elif yes_count <= 4:
        message = "You’re in the thick of it..."
    else:
        message = "A reset is overdue..."

    send_mail(
        subject="Your Quiz Results",
        message=message,
        from_email="joseph@declutterminds.ca",
        recipient_list=[user.email],
    )
    return Response({"status": "Email sent"})



@api_view(['GET'])
@permission_classes([IsAuthenticated])
def protected_view(request):
    return Response({
        "message": f"Hi {request.user.email}, you're authenticated!",
        "user_id": request.user.id
    })


    

class ProtectedView(APIView):
    permission_classes = [IsAuthenticated]

    def get(self, request):
        return Response({"message": "You're authenticated", "email": request.user.email})


# ✅ CSRF-exempt Signup API for React
@method_decorator(csrf_exempt, name='dispatch')
class SignupView(APIView):
    def post(self, request):
        serializer = SignupSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response({"message": "User created successfully"}, status=status.HTTP_201_CREATED)
        print("Signup error →", serializer.errors)  
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

# ✅ Optional homepage view
def home(request):
    return HttpResponse("<h1>Welcome to Declutter</h1><p>This is the homepage.</p>")

# ✅ Django form-based signup (if using template)
'''def signup_view(request):
    if request.method == 'POST':
        form = UserCreationForm(request.POST)
        if form.is_valid():
            user = form.save()
            login(request, user)
            return redirect('/')  
    else:
        form = UserCreationForm()
    return render(request, 'accounts/signup.html', {'form': form})'''


class LoginView(APIView):
    def post(self, request):
        email = request.data.get('email')
        password = request.data.get('password')

        user = authenticate(request, email=email, password=password)

        if user:
            refresh = RefreshToken.for_user(user)
            return Response({
                "refresh": str(refresh),
                "access": str(refresh.access_token),
                "user": {
                    "email": user.email,
                    "first_name": user.first_name,
                    "last_name": user.last_name,
                    "role": user.role,
                    "contact": user.contact
                }
            })
        else:
            return Response({"error": "Invalid email or password"}, status=status.HTTP_401_UNAUTHORIZED)
        

# ✅ Django form-based login (if using template)
'''def login_view(request):
    if request.method == 'POST':
        form = AuthenticationForm(data=request.POST)
        if form.is_valid():
            user = form.get_user()
            login(request, user)
            return redirect('/')
    else:
        form = AuthenticationForm()
    return render(request, 'accounts/login.html', {'form': form})'''

# ✅ Logout view
def logout_view(request):
    if request.method == 'POST':
        logout(request)
        return redirect('/accounts/login/')
