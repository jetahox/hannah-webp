import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  standalone: true,
  imports: [ReactiveFormsModule, NgIf],
})
export class LoginComponent {
  form: FormGroup;
  showFormError = false;

  constructor(private router: Router) {
    this.form = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required, Validators.minLength(6)]),
    });
  }

  onSubmit() {
    if (this.form.invalid) {
      this.showFormError = true;
      return;
    }

    this.showFormError = false;
    console.log('Form Data:', this.form.value);
    this.router.navigate(['/main']);
  }
}
