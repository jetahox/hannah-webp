import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { FooterComponent } from "../footer/footer.component";


@Component({
  selector: 'app-meine-daten',
  standalone: true,
  templateUrl: './meine-daten.component.html',
  styleUrl: './meine-daten.component.css',
  imports: [CommonModule, FormsModule, FooterComponent]
})
export class MeineDatenComponent {
  oldPassword = '';
  newPassword = '';
  confirmPassword = '';

  changePassword() {
    if (this.newPassword !== this.confirmPassword) {
      alert('Die Passwörter stimmen nicht überein.');
      return;
    }
    alert('Passwort erfolgreich geändert.');
  }
}
