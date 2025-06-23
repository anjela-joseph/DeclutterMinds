from django.urls import path
from . import views
from .views import SignupView, home, LoginView, logout_view
from .serializers import MyTokenObtainPairSerializer
from rest_framework_simplejwt.views import TokenObtainPairView
from .views import ProtectedView
from .views import protected_view
from .views import send_quiz_email

class CustomTokenObtainPairView(TokenObtainPairView):
    serializer_class = MyTokenObtainPairSerializer

urlpatterns = [
    path('', views.home, name='home'),
    path('signup/', SignupView.as_view(), name='signup'),
    path('login/', LoginView.as_view(), name='login'),
    path('logout/', views.logout_view, name='logout'),
    path('token/', CustomTokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('protected/', ProtectedView.as_view(), name='protected'), 
    path('protected/', protected_view),
    path('send-quiz-email/', views.send_quiz_email),
    path("api/quiz/send-email/", send_quiz_email),


]
