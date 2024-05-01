from django.contrib import admin
from .models import Event, Booking, UserProfile

@admin.register(Event)
class Event(admin.ModelAdmin):
    list_display = ('id', 'title')
    search_fields = ('title',)

@admin.register(Booking)
class Booking(admin.ModelAdmin):
    list_display = ('id', 'user', 'event_id', 'booked_at')
    search_fields = ('user',)

@admin.register(UserProfile)
class UserProfile(admin.ModelAdmin):
    list_display = ('id', 'user', 'bio')
    search_fields = ('user',)