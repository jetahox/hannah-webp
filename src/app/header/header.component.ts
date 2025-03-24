import { Component, ElementRef, HostListener } from '@angular/core';
import { NgIf, CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { Output } from '@angular/core';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  standalone: true,
  imports: [CommonModule, NgIf]
})
export class HeaderComponent {
  dropdownOpen = false;

  @Output() navigate = new EventEmitter<string>();

  constructor(private eRef: ElementRef) {}

  toggleDropdown() {
    this.dropdownOpen = !this.dropdownOpen;
  }

  @HostListener('document:click', ['$event'])
  clickOutside(event: Event) {
    if (!this.eRef.nativeElement.contains(event.target)) {
      this.dropdownOpen = false;
    }
  }

  goTo(view: string) {
    this.navigate.emit(view);
    this.dropdownOpen = false;
  }

  logout() {
    window.location.href = '/login';
  }
}
