import { Component } from '@angular/core';
import { FullCalendarModule } from '@fullcalendar/angular';
import { CalendarOptions } from '@fullcalendar/core';
import dayGridPlugin from '@fullcalendar/daygrid'; 
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-calendar',
  standalone: true,
  imports: [CommonModule, FullCalendarModule],
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css'],

})
export class CalendarComponent {
  calendarOptions: CalendarOptions = {
    plugins: [dayGridPlugin],
    initialView: 'dayGridMonth',
    locale: 'de', 
    dayHeaderFormat:{weekday:'long'},
    events: [
      { title: 'Event 1', date: '2025-04-17' },
      { title: 'Event 2', date: '2025-04-22' }
    ],
    headerToolbar: {
      left: 'prev,next title',
      center: '',
      right: ''
    },
    
  };
}
