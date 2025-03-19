import { Component } from '@angular/core';
import { SidebarComponent } from '../sidebar/sidebar.component';
import { HeaderComponent } from '../header/header.component';
import { RouterOutlet } from '@angular/router';
import { FooterComponent } from '../footer/footer.component';
import { MainContentComponent } from "../main-content/main-content.component";
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-main',
  imports: [SidebarComponent, HeaderComponent, RouterOutlet, FooterComponent, MainContentComponent,NgIf],
  templateUrl: './main.component.html',
  styleUrl: './main.component.css'
})
export class MainComponent {
  showMainContent = true;

}
