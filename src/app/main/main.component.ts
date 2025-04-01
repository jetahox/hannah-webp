import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SidebarComponent } from '../sidebar/sidebar.component';
import { HeaderComponent } from '../header/header.component';
import { MainContentComponent } from '../main-content/main-content.component';
import { MeineDatenComponent } from '../meine-daten/meine-daten.component';
import { HilfeComponent } from '../hilfe/hilfe.component';

@Component({
  selector: 'app-main',
  imports: [
    SidebarComponent,
    HeaderComponent,
    MainContentComponent,
    MeineDatenComponent,
    HilfeComponent,
    RouterModule 
  ],
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css'],
  standalone: true
})
export class MainComponent {}
