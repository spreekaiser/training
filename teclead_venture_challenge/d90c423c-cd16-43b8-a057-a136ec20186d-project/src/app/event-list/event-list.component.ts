import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-event-list',
  templateUrl: './event-list.component.html',
  styleUrls: ['./event-list.component.css'],
})
export class EventListComponent implements OnInit {
  // events: any[] = [];
  groupedEvents: { date: string; events: any[] }[] = [];

  constructor(private dataService: DataService) {}

  // ngOnInit(): void {
  //   this.dataService.getEventData().subscribe((data: any) => {
  //     this.events = data.sort(
  //       (a: any, b: any) =>
  //         new Date(a.date).getTime() - new Date(b.date).getTime()
  //     );
  //   });
  // }

  ngOnInit(): void {
    this.dataService.getEventData().subscribe((data: any) => {
      // Daten nach Datum sortieren
      data = data.sort(
        (a: any, b: any) =>
          new Date(a.date).getTime() - new Date(b.date).getTime()
      );

      // Events nach Datum gruppieren
      this.groupedEvents = this.groupEventsByDate(data);
    });
  }

  groupEventsByDate(events: any[]): { date: string; events: any[] }[] {
    const groupedEvents: { date: string; events: any[] }[] = [];

    events.forEach((event) => {
      const date = event.date;
      const existingGroup = groupedEvents.find((group) => group.date === date);

      if (existingGroup) {
        existingGroup.events.push(event);
      } else {
        groupedEvents.push({ date, events: [event] });
      }
    });

    return groupedEvents;
  }
}
