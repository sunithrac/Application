import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../core/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  public form: FormGroup;
  public errorMessage = '';

  constructor( private fb: FormBuilder, private authService: AuthService, private router: Router ) { 
    this.form = this.fb.group({
      email: ['', [Validators.required]],
      password: ['', [Validators.required]]
    });
  }

  public onSubmit() {
    if (this.authService.login(this.form.value.email, this.form.value.password)) {
      this.router.navigate(['/']);
    } else {
      this.errorMessage = 'Invalid username or password';
    }
  }
}
