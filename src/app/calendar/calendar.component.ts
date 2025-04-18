import { Component, ViewChild, AfterViewInit } from '@angular/core';
import { FullCalendarModule, FullCalendarComponent } from '@fullcalendar/angular';
import { CalendarOptions } from '@fullcalendar/core';
import dayGridPlugin from '@fullcalendar/daygrid';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import interactionPlugin from '@fullcalendar/interaction';

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
    plugins: [dayGridPlugin, interactionPlugin],
    initialView: 'dayGridMonth',
    locale: 'de',
    dayHeaderFormat: { weekday: 'long' },
    events: [
      { title: 'Event 1', date: '2025-04-17' },
      { title: 'Event 2', date: '2025-04-22' },
    ],
    headerToolbar: {
      left: 'prev,next title',
      center: '',
      right: '',
    },
    dateClick: this.handleDateClick.bind(this),
  };

  showPopup: boolean = false;
  selectedOption: string | null = null;

  eventData = {
    title: '',
    description: '',
    startDate: '',
    endDate: '',
    status: 'Abwesend',
    recurring: 'nein',
    frequency: 'Daily',
    amTime: '',
    endTime: ''
  };

  ngAfterViewInit() {}

  openPopup() {
    this.showPopup = true;
  }

  closePopup() {
    this.showPopup = false;
    this.selectedOption = null;
    this.resetEventData();
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

  handleDateClick(arg: any) {
    this.eventData.startDate = arg.dateStr;
    this.eventData.endDate = arg.dateStr;
    this.openPopup();
  }

  selectOption(option: string) {
    this.selectedOption = option;
  }

  resetEventData() {
    this.eventData = {
      title: '',
      description: '',
      startDate: '',
      endDate: '',
      status: 'Abwesend',
      recurring: 'nein',
      frequency: 'Daily',
      amTime: '',
      endTime: ''
    };
  }
}
