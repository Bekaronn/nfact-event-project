import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
import {Booking} from "../model/booking.model";
import {UserService} from "./user.service";

@Injectable({
  providedIn: 'root'
})
export class BookingService {
  private apiUrl = 'http://localhost:8000/api/bookings/';

  constructor(private http: HttpClient, private userService: UserService) {
  }

  createBooking(userId: number, eventId: number): Observable<any> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `token ${this.userService.getToken()}`
    });
    const body = {
      user: userId,
      event: eventId
    };
    return this.http.post(this.apiUrl, body, { headers: headers });
  }
}
