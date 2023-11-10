import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchBarComponent } from './search-bar/search-bar.component';
import { Error404Component } from './error-404/error-404.component';
import { AutoFocusDirective } from './auto-focus.directive';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [SearchBarComponent,Error404Component, AutoFocusDirective],
  exports: [SearchBarComponent, AutoFocusDirective]

})
export class SharedModule { }