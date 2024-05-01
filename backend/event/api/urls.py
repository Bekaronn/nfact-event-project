from django.urls import path
from .views import (
    EventListCreateAPIView,
    EventRetrieveUpdateDestroyAPIView,
    BookingListCreateAPIView,
    BookingRetrieveUpdateDestroyAPIView,
    UserProfileRetrieveUpdateAPIView,
    UserCreateAPIView,
    UserLoginAPIView
)

urlpatterns = [
    # Маршруты для мероприятий
    path('events/', EventListCreateAPIView.as_view(), name='event-list-create'),
    path('events/<int:pk>/', EventRetrieveUpdateDestroyAPIView.as_view(), name='event-detail'),

    # Маршруты для бронирований
    path('bookings/', BookingListCreateAPIView.as_view(), name='booking-list-create'),
    path('bookings/<int:pk>/', BookingRetrieveUpdateDestroyAPIView.as_view(), name='booking-detail'),

    # Маршрут для профиля пользователя
    path('profile/', UserProfileRetrieveUpdateAPIView.as_view(), name='user-profile'),

    # Маршрут для создания пользователя (регистрации)
    path('register/', UserCreateAPIView.as_view(), name='user-create'),

    # Маршрут для входа в пользователя (регистрации)
    path('login/', UserLoginAPIView.as_view(), name='user-login'),
]
