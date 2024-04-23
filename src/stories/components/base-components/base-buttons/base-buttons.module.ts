import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BaseDropdownButtonComponent } from './base-dropdown-button/base-dropdown-button.component';
import { BaseLinearGradientComponent } from '../base-linear-gradient/base-linear-gradient.component';
import { BaseButtonComponent } from './base-button/base-button.component';
import { NgbDropdown, NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    BaseDropdownButtonComponent,
    BaseButtonComponent,
  ],
  imports: [
    CommonModule,
    NgbModule,
    NgbDropdown,
    BaseLinearGradientComponent
  ],
  exports: [
    BaseDropdownButtonComponent,
    BaseButtonComponent,
  ]
})

export class BaseButtonsModule { }
