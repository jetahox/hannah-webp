import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { MainComponent } from './main/main.component';
import { MeineDatenComponent } from './meine-daten/meine-daten.component';
import { MainContentComponent } from './main-content/main-content.component';
import { DetailsComponent } from './details/details.component';
import { AlarmketteComponent } from './alarm/alarmkette/alarmkette.component';
import { CalendarComponent } from './calendar/calendar.component';

export const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { 
    path: 'main', 
    component: MainComponent,
    children: [
      { path: '', pathMatch: 'full', component: MainContentComponent }, 
      { path: 'meine-daten', component: MeineDatenComponent },
      { path: 'details', component: DetailsComponent },
      { path: 'alarm/alarmkette', component: AlarmketteComponent },
      { path: 'calendar', component: CalendarComponent }
    ]
  }
];
