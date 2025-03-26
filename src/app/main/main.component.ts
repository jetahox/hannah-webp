import { Component } from '@angular/core';
import { SidebarComponent } from '../sidebar/sidebar.component';
import { HeaderComponent } from '../header/header.component';
import { FooterComponent } from '../footer/footer.component';
import { MainContentComponent } from '../main-content/main-content.component';
import { MeineDatenComponent } from '../meine-daten/meine-daten.component';
// import { KontakteComponent } from '../kontakte/kontakte.component';
// import { DokumenteComponent } from '../dokumente/dokumente.component';
import { HilfeComponent } from '../hilfe/hilfe.component';
// import { DatenschutzComponent } from '../datenschutz/datenschutz.component';
// import { CookiesComponent } from '../cookies/cookies.component';
import { NgIf } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-main',
  imports: [
    SidebarComponent,
    HeaderComponent,
    FooterComponent,
    MainContentComponent,
    MeineDatenComponent,
    HilfeComponent,
    NgIf
  ],
  templateUrl: './main.component.html',
  styleUrl: './main.component.css',
  standalone:true,
})
export class MainComponent {
  activeView: string = 'main';
  

  constructor(private route: ActivatedRoute, private router: Router) {
    this.route.queryParams.subscribe(params => {
      if (params['view']) {
        this.activeView = params['view'];
      }
    });
  }

  navigate(view: string) {
    this.activeView = view;
    this.router.navigate(['/main'], { queryParams: { view } });
  }
  changeView(view: string) {
    this.activeView = view;}

}