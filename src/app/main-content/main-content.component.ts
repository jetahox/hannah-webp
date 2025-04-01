import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { User } from '../user.model';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-main-content',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './main-content.component.html',
  styleUrls: ['./main-content.component.css'],
})
export class MainContentComponent implements OnInit {
  trudoText: string = 'Im moment kein alarm in Trudo Zyre.'; 
  // users: User[] = [];

  constructor(private apiService: ApiService , private router: Router) {}

  ngOnInit() {
    /*
    this.apiService.getUsers().subscribe((response) => {
      this.users = response.slice(0, 5);  
      this.trudoText = this.users
        .map(user => user.name)
        .join(', '); 
    });
    */
  }
  
  goToDetails() {
    this.router.navigate(['/main/details']);
    console.log('details');
  }
}
