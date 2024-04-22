import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BaseLinearGradientComponent } from '../../base-linear-gradient/base-linear-gradient.component';
import { BaseDropdownButtonComponent } from './base-dropdown-button.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserModule } from '@angular/platform-browser';

@NgModule({
  declarations: [
    BaseDropdownButtonComponent,
  ],
  imports: [
    BrowserModule,
    CommonModule,
    NgbModule,
    BaseLinearGradientComponent
  ],
  exports: [
    BaseDropdownButtonComponent,
  ]
})
export class BaseDropdownButtonModule { }