import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-event-list',
  templateUrl: './event-list.component.html',
  styleUrls: ['./event-list.component.css'],
})
export class EventListComponent implements OnInit {
  events: any;

  constructor(private dataService: DataService) {}

  ngOnInit() {
    this.dataService.getEventData().subscribe((data) => {
      this.events = data;
    });
  }
}
