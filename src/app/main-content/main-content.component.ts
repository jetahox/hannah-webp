import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-main-content',
  templateUrl: './main-content.component.html',
  styleUrls: ['./main-content.component.css'],
})
export class MainContentComponent implements OnInit {
  trudoText: string = 'Im moment kein alarm in Trudo Zyre.'; 

  constructor(private apiService: ApiService) {}

  ngOnInit() {
    this.apiService.getDummyData().subscribe((response) => {
      this.trudoText = response.title;
    });
  }
}
