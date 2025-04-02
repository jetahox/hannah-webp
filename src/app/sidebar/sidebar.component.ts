import { Component, EventEmitter, Output } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css',
  imports:[RouterModule],
})
export class SidebarComponent {
  constructor(private router: Router) {}
  goToMain() {
    this.router.navigate(['/main']);
  }
}


