Project Setup

Prerequisites
Node.js and npm installed on your machine.
Angular CLI installed globally (npm install -g @angular/cli).
Git installed on your machine.
Steps to Create and Set Up the Project
Create a New Angular Project

bash
ng new week4tut
When prompted, add Angular routing (Yes).
Choose your preferred stylesheet format (CSS, SCSS, etc.).
Install Bootstrap

bash
Copy code
npm install bootstrap --save
Add Bootstrap to your angular.json file under the styles array:
json
Copy code
"styles": [
  "node_modules/bootstrap/dist/css/bootstrap.min.css",
  "src/styles.css"
]
Create Components

Login Component:

ng generate component login
Account Component:

ng generate component account
Add Routing

Update your app.routes.ts file (or app-routing.module.ts if present):
typescript
Copy code
import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { AccountComponent } from './account/account.component';

export const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'login', component: LoginComponent },
  { path: 'account', component: AccountComponent },
];
Import and add the RouterModule in your app.module.ts:
typescript
Copy code
import { RouterModule } from '@angular/router';
import { routes } from './app.routes';

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  ...
})
export class AppModule { }
Update app.component.html for Navigation

Add the following code to create a Bootstrap navbar linking the login and account pages:
html
Copy code
<nav class="navbar navbar-expand-lg navbar-light bg-light">
  <a class="navbar-brand" routerLink="/">Home</a>
  <div class="collapse navbar-collapse">
    <ul class="navbar-nav mr-auto">
      <li class="nav-item">
        <a class="nav-link" routerLink="/login">Login</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" routerLink="/account">Account</a>
      </li>
    </ul>
  </div>
</nav>
<div class="container">
  <router-outlet></router-outlet>
</div>
Implement Login Functionality

Update login.component.ts with hard-coded users and login logic:
typescript
Copy code
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  email: string = '';
  password: string = '';
  error: string = '';

  private users = [
    { email: 'user1@example.com', password: 'password1' },
    { email: 'user2@example.com', password: 'password2' },
    { email: 'user3@example.com', password: 'password3' }
  ];

  constructor(private router: Router) {}

  login() {
    const user = this.users.find(u => u.email === this.email && u.password === this.password);
    if (user) {
      this.router.navigate(['/account']);
    } else {
      this.error = 'Invalid email or password';
    }
  }
}
Update login.component.html with the login form:
html
Copy code
<div class="login-container">
  <form (ngSubmit)="login()">
    <div class="form-group">
      <label for="email">Email</label>
      <input type="email" class="form-control" id="email" [(ngModel)]="email" name="email" required>
    </div>
    <div class="form-group">
      <label for="password">Password</label>
      <input type="password" class="form-control" id="password" [(ngModel)]="password" name="password" required>
    </div>
    <button type="submit" class="btn btn-primary">Login</button>
  </form>
  <div *ngIf="error" class="alert alert-danger">{{ error }}</div>
</div>
Add an Image to the Account Page

Move your image to public/images/.
Update account.component.html to display the image:
html
Copy code
<div>
  <h1>Accounts Page</h1>
  <img src="images/account-image.jpg" alt="Account Image">
</div>
Initialize Git and Push to GitHub

Initialize Git:


git init
Add All Files:

git add -A
Commit Changes:

git commit -m "Week 4 Tutorial setup"
Add Remote Origin:

git remote add origin <your-repo-url>
Push to GitHub:

git push -u origin main
Generate README.md

Add a README.md file to the root of your project with a title and a summary of the steps.
markdown

# Week4 Angular Project

## Commands Used

- **Angular CLI:**
  - `ng new week4tut` - Create a new Angular project.
  - `ng generate component login` - Generate the login component.
  - `ng generate component account` - Generate the account component.
  - `ng serve` - Serve the application locally.
- **Npm:**
  - `npm install bootstrap --save` - Install Bootstrap.
- **Git:**
  - `git init` - Initialize a local Git repository.
  - `git add -A` - Add all files to staging.
  - `git commit -m "Week 4 Tutorial setup"` - Commit changes.
  - `git remote add origin <repo-url>` - Add remote repository.
  - `git push -u origin main` - Push to GitHub.
