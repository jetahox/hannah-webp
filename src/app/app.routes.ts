
import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MeineDatenComponent } from './meine-daten/meine-daten.component';
import { KontakteComponent } from './kontakte/kontakte.component';
import { DokumenteComponent } from './dokumente/dokumente.component';
import { HilfeComponent } from './hilfe/hilfe.component';
import { DatenschutzComponent } from './datenschutz/datenschutz.component';
import { CookiesComponent } from './cookies/cookies.component';
import { MainComponent } from './main/main.component';

export const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  {
    path: 'main',
    component: MainComponent},
      { path: 'dashboard', component: MainComponent },
      { path: 'meine-daten', component: MeineDatenComponent },
      { path: 'kontakte', component: KontakteComponent },
      { path: 'dokumente', component: DokumenteComponent },
      { path: 'hilfe', component: HilfeComponent },
      { path: 'datenschutz', component: DatenschutzComponent },
      { path: 'cookies', component: CookiesComponent }
];

