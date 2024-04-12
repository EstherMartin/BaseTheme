import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BaseLinearGradientComponent } from '../../base-linear-gradient/base-linear-gradient.component';
import { BaseDropdownButtonComponent } from './base-dropdown-button.component';

@NgModule({
  declarations: [
    BaseDropdownButtonComponent,
  ],
  imports: [
    CommonModule, 
    BaseLinearGradientComponent
  ],
  exports: [
    BaseDropdownButtonComponent,
  ]
})
export class BaseDropdownButtonModule { }