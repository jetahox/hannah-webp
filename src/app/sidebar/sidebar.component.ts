import { Component, EventEmitter, Output } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Router } from '@angular/router';
import { NgIf } from '@angular/common';
import { OnInit } from '@angular/core';
import { NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css',
  imports:[RouterModule, NgIf ],
})
export class SidebarComponent implements OnInit {
  constructor(private router: Router) {}

  showDropdown = false;
  showAlarm = false;
  showCalendar = false;

  ngOnInit(): void {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        const url = event.url;

        // Show Alarm 
        if (url.includes('details') || url.includes('alarmkette')) {
          this.showAlarm = true;
        } else {
          this.showAlarm = false;
          this.showDropdown = false;
        }

        // Show Calendar
        if (url.includes('details') || url.includes('calendar')) {
          this.showCalendar = true;
        } else {
          this.showCalendar = false;
        }
      }
    });
  }


  goToMain() {
    this.router.navigate(['/main']);
  }
  toggleDropdown() {
    this.showDropdown = !this.showDropdown; 
  }

  navigateTo(path: string) {
    this.router.navigate([path]);
  }

}


