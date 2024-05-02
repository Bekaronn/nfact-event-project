import {Component, OnInit} from '@angular/core';
import {Booking} from "../../model/booking.model";
import {FormsModule} from "@angular/forms";
import {RouterLink} from "@angular/router";
import {NgForOf} from "@angular/common";
import {BookingService} from "../../services/booking.service";

@Component({
  selector: 'app-booking',
  standalone: true,
  imports: [
    FormsModule,
    RouterLink,
    NgForOf
  ],
  templateUrl: './booking.component.html',
  styleUrl: './booking.component.css'
})
export class BookingComponent implements OnInit{
  bookings: Booking[] = [];

  constructor(private bookingService: BookingService) { }

  ngOnInit(): void {
    this.bookingService.getBooking()
      .subscribe((data: any) => {
        this.bookings = data;
      });
  }

  check() {
    console.log(this.bookings)
  }
}
