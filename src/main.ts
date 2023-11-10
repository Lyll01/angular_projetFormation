import 'zone.js/dist/zone';
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { bootstrapApplication } from '@angular/platform-browser';
import { UserModule } from './user/user.module';
import { provideRouter, RouterModule, Routes } from '@angular/router';
import { UserListComponent } from './user/user-list/user-list.component';
import { LoginComponent } from './auth/login/login.component';
import { Error404Component } from './shared/error-404/error-404.component';
import { UserDetailsComponent } from './user/user-details/user-details.component';
import { provideHttpClient } from '@angular/common/http';
import { SignupComponent } from './auth/signup/signup.component';
import { FormsModule } from '@angular/forms';
import { AuthModule } from './auth/auth.module';

const routes: Routes = [
  {path: '', component: UserListComponent},
  {path: 'login', component: LoginComponent},
  {path: 'users/:id', component: UserDetailsComponent},
  {path: 'form', component: SignupComponent},
  {path: '**', component: Error404Component}
]

@Component({
  selector: 'my-app',
  standalone: true,
  imports: [CommonModule, UserModule,RouterModule, FormsModule, AuthModule],
  template: `
    <app-header user='Lylian'></app-header>
    <router-outlet></router-outlet>
  `,
})
export class App {
  name = 'Angular';
}

bootstrapApplication(App, {
  providers: [provideRouter(routes), provideHttpClient()]
});
