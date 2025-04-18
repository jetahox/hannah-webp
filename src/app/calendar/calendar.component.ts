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

  showPopup: boolean = false;
  selectedOption: string | null = null;
  isEdit: boolean = false;
  eventClicked: boolean = false; 

  eventData = {
    id: '',
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

  calendarOptions: CalendarOptions = {
    plugins: [dayGridPlugin, interactionPlugin],
    initialView: 'dayGridMonth',
    locale: 'de',
    dayHeaderFormat: { weekday: 'long' },
    events: [],
    headerToolbar: {
      left: 'prev,next title',
      center: '',
      right: '',
    },
    dateClick: this.handleDateClick.bind(this),
    eventClick: this.handleEventClick.bind(this)
  };

  ngAfterViewInit() {}

  openPopup() {
    this.showPopup = true;
  }

  closePopup() {
    this.showPopup = false;
    this.isEdit = false;
    this.selectedOption = null;
    this.resetEventData();
  }

  saveEvent() {
    if (this.fullCalendar) {
      const calendarApi = this.fullCalendar.getApi();
      const newEvent = {
        id: this.eventData.id || new Date().getTime().toString(), 
        title: this.eventData.title,
        start: this.eventData.startDate,
        end: this.eventData.endDate,
        extendedProps: {
          description: this.eventData.description,
          status: this.eventData.status,
          recurring: this.eventData.recurring,
          frequency: this.eventData.frequency,
          amTime: this.eventData.amTime,
          endTime: this.eventData.endTime
        }
      };
      calendarApi.addEvent(newEvent);
      this.showPopup = false;
    }
  }

  handleDateClick(arg: any) {
    this.eventData.startDate = arg.dateStr;
    this.eventData.endDate = arg.dateStr;
    this.eventData.id = ''; 
    this.eventClicked = false; 

    this.isEdit = false;
    this.openPopup();
  }

  handleEventClick(arg: any) {
    const event = arg.event;
    this.eventData = {
      id: event.id,
      title: event.title || '',
      description: event.extendedProps.description || '',
      startDate: event.startStr || '',
      endDate: event.endStr || event.startStr || '',
      status: event.extendedProps.status || 'Abwesend',
      recurring: event.extendedProps.recurring || 'nein',
      frequency: event.extendedProps.frequency || 'Daily',
      amTime: event.extendedProps.amTime || '',
      endTime: event.extendedProps.endTime || ''
    };

    this.isEdit = true; 
    this.eventClicked = true; 


    this.openPopup();
  }

  selectOption(option: string) {
    this.selectedOption = option;
  }

  editEvent() {

    if (!this.isEdit || !this.eventData.title) return;
    this.showPopup = false;
  }

  deleteEvent() {
    if (!this.isEdit || !this.eventData.id) return;
    if (this.fullCalendar) {
      const calendarApi = this.fullCalendar.getApi();
      const event = calendarApi.getEventById(this.eventData.id);
      if (event) {
        event.remove(); 
      }
      this.showPopup = false;
      this.resetEventData(); 
    }
  }

  resetEventData() {
    this.eventData = {
      id: '',
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
