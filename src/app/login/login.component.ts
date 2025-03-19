import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  standalone: true,
  imports: [ReactiveFormsModule]
})
export class LoginComponent {
  form: FormGroup;

  constructor(private router: Router) {

    this.form = new FormGroup({
      email: new FormControl('', {
        validators:[Validators.email , Validators.required]
      }), 
      password: new FormControl('', {
        validators: [Validators.required , Validators.minLength(6)]
      })
    });
  }

  goToMainPage() {
    this.router.navigate(['/main']);
  }

  onSubmit() {
    if (this.form.valid) {
      console.log('Form Data:', this.form.value);
      this.goToMainPage(); 
    } else {
      console.log('Form is invalid!');
    }
  }
}
