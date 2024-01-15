import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  constructor(private authService: AuthService, private router: Router) {}

  // Method to handle logout
  logout() {
    this.authService.logout().subscribe(
      response => {
        // Handle successful logout
        console.log('Logout successful', response);

        // Remove the access token from local storage
        localStorage.removeItem('token');

        // Redirect to the login component
        this.router.navigate(['/login']);
      },
      error => {
        // Handle logout error
        console.error('Logout failed', error);
      }
    );
  }
}
