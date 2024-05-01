import { Component } from '@angular/core';
import { EventService } from "../../services/event.service";
import {HttpClientModule} from "@angular/common/http";
import {CommonModule, NgForOf} from "@angular/common";
import {Event} from "../../model/event.model";
import {RouterLink} from "@angular/router";

@Component({
  selector: 'app-event-list',
  standalone: true,
  imports: [
    HttpClientModule,
    NgForOf,
    CommonModule,
    RouterLink
  ],
  templateUrl: './event-list.component.html',
  styleUrl: './event-list.component.css'
})
export class EventListComponent {
  events: Event[] = [];

  constructor(private eventService: EventService) { }

  ngOnInit(): void {
    this.eventService.getAllEvents()
      .subscribe((data: Event[]) => {
        this.events = data;
      });
  }
}
