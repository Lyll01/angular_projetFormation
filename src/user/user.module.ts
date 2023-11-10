import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserListComponent } from './user-list/user-list.component';
import { SharedModule } from '../shared/shared.module';
import { HeaderComponent } from './header/header.component';
import { RouterModule } from '@angular/router';
import { UserDetailsComponent } from './user-details/user-details.component';

@NgModule({
  imports: [CommonModule,SharedModule,RouterModule],
  declarations: [UserListComponent,HeaderComponent,UserDetailsComponent],
  exports: [UserListComponent,HeaderComponent],
})
export class UserModule {}
