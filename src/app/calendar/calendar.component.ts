import { Component, ViewChild, AfterViewInit } from '@angular/core';
import { FullCalendarModule } from '@fullcalendar/angular';
import { CalendarOptions } from '@fullcalendar/core';
import dayGridPlugin from '@fullcalendar/daygrid';
import { CommonModule } from '@angular/common';
import { FullCalendarComponent } from '@fullcalendar/angular';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-calendar',
  standalone: true,
  imports: [CommonModule, FullCalendarModule, FormsModule],
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css'],
})
export class CalendarComponent implements AfterViewInit {
  @ViewChild(FullCalendarComponent) fullCalendar: FullCalendarComponent | undefined;

  calendarOptions: CalendarOptions = {
    plugins: [dayGridPlugin],
    initialView: 'dayGridMonth',
    locale: 'de',
    events: [
      { title: 'Event 1', date: '2025-04-17' },
      { title: 'Event 2', date: '2025-04-22' },
    ],
    headerToolbar: {
      left: 'prev,next title',
      center: '',
      right: '',
    },
  };

  showPopup: boolean = false;
  eventData = {
    title: '',
    description: '',
    startDate: '',
    endDate: '',
    status: 'Abwesend',
    recurring: 'nein',
  };

  ngAfterViewInit() {}

  openPopup() {
    this.showPopup = true;
  }

  closePopup() {
    this.showPopup = false;
  }

  saveEvent() {
    if (this.fullCalendar) {
      const calendarApi = this.fullCalendar.getApi();
      const newEvent = {
        title: this.eventData.title,
        start: this.eventData.startDate,
        end: this.eventData.endDate,
        description: this.eventData.description,
        status: this.eventData.status,
        recurring: this.eventData.recurring,
      };
      calendarApi.addEvent(newEvent);
      this.showPopup = false;
    }
  }
}

