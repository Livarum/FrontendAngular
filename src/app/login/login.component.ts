import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  email: string = '';
  password: string = '';
  loggedIn: boolean = false;
  userName: string = '';

  constructor(private authService: AuthService, private router: Router) {}

  login() {
    this.authService.login(this.email, this.password).subscribe(
      response => {
        // Handle successful login
        console.log('Login successful', response);

        // Store the access token in local storage
        localStorage.setItem('token', response.token);

        this.loggedIn = true;

        // Redirect to the home component
        this.router.navigate(['/home']);

      },
      error => {
        // Handle login error
        console.error('Login failed', error);
      }
    );
  }

}
