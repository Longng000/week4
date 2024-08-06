import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  email: string = '';
  password: string = '';
  errorMessage: string = '';

  // Hardcoded user data
  private users = [
    { email: 'user1@example.com', password: 'password1' },
    { email: 'user2@example.com', password: 'password2' },
    { email: 'user3@example.com', password: 'password3' }
  ];

  constructor(private router: Router) {}

  onSubmit() {
    const user = this.users.find(user => user.email === this.email && user.password === this.password);

    if (user) {
      this.router.navigate(['/account']);
    } else {
      this.errorMessage = 'Invalid email or password.';
    }
  }
}
