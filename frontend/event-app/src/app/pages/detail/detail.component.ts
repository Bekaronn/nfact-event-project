import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {EventService} from "../../services/event.service";
import {Event} from "../../model/event.model";
import {CommonModule} from "@angular/common";
import {BookingService} from "../../services/booking.service";
import {FormsModule} from "@angular/forms";

@Component({
  selector: 'app-detail',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule
  ],
  templateUrl: './detail.component.html',
  styleUrl: './detail.component.css'
})
export class DetailComponent implements OnInit{
  eventId: string | null = "";
  event: Event;
  isMoreText: boolean = false;
  moreText: string = "Читать полностью";
  showOverlay = false;

  constructor(private activatedRoute: ActivatedRoute, private eventService: EventService,
              private bookingService: BookingService) {
  }

  ngOnInit(): void {
    this.eventId = this.activatedRoute.snapshot.paramMap.get('id');
    if(this.eventId != null){
      this.eventService.getEvent(Number(this.eventId)).subscribe(
        data => this.event = data
      )
    }
  }

  toggleMoreText(){
    this.isMoreText = !this.isMoreText;
    if(this.moreText === "Скрыть"){
      this.moreText = "Читать полностью";
    } else{
      this.moreText = "Скрыть";
    }
  }

  toggleOverlay() {
    this.showOverlay = !this.showOverlay;
    console.log(this.showOverlay);
  }

  createBooking() {
    this.bookingService.createBooking(2, Number(this.eventId))
      .subscribe(
        response => {
          console.log('Booking created successfully:', response);
        },
        error => {
          console.error('Error creating booking:', error);
        }
      );
  }
}
