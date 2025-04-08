import { Component, EventEmitter, Output } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Router } from '@angular/router';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css',
  imports:[RouterModule, NgIf],
})
export class SidebarComponent {

  constructor(private router: Router) {}
  showDropdown = false;
  goToMain() {
    this.router.navigate(['/main']);
  }

  toggleDropdown() {
    this.showDropdown = !this.showDropdown; 
    console.log('clicked')
  }

  navigateTo(path: string) {
    this.router.navigate([path]);
  }}


