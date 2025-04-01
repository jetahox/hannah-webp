
import { Component, ElementRef, HostListener, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  standalone: true,
  imports: [CommonModule, RouterModule],
})
export class HeaderComponent implements OnInit {
  dropdownOpen = false;
  currentUsername: string = 'Trudo Main Account'; 

  constructor(private eRef: ElementRef, private router: Router, private route: ActivatedRoute) {}

  ngOnInit() {
    this.router.events.subscribe(() => {
      const currentRoute = this.router.url;
      if (currentRoute.includes('details')) {
        this.currentUsername = 'Trudo Main Account (Trudo Zyre)';
      } else {
        this.currentUsername = 'Trudo Main Account';
      }
    });
  }

  toggleDropdown() {
    this.dropdownOpen = !this.dropdownOpen;
  }

  @HostListener('document:click', ['$event'])
  clickOutside(event: Event) {
    if (!this.eRef.nativeElement.contains(event.target)) {
      this.dropdownOpen = false;
    }
  }


  goToMain() {
    this.router.navigate(['/main']);
  }

  goToDetails() {
    this.router.navigate(['/main/details']);
  }

  logout() {
    window.location.href = '/login';
  }
}




