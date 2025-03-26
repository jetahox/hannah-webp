import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { MainComponent } from './main/main.component';

@Component({
  selector: 'app-root',
  imports:[RouterOutlet],
    templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'hannahwebp';
}
