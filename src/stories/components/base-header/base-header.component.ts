import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BaseButtonComponent } from '../base-buttons/base-button/base-button.component';
import type { CurrentlyLoggedInUser } from '../../CurrentlyLoggedInUser';
import { BaseLinearGradientComponent } from '../base-linear-gradient/base-linear-gradient.component';

@Component({
  selector: 'base-header',
  standalone: true,
  imports: [CommonModule, BaseButtonComponent, BaseLinearGradientComponent],
  templateUrl: './base-header.component.html',
  styleUrls: ['./base-header.component.scss'],
})
export class BaseHeaderComponent {
  @Input() public currentlyLoggedInUser!: CurrentlyLoggedInUser;
  @Input() public logoPage = '';
  @Output() public onLogin = new EventEmitter<Event>();
  @Output() public onLogout = new EventEmitter<Event>();
  @Output() public onCreateAccount = new EventEmitter<Event>();

  public getLogoPage(): string {
    return "../../../assets/mock1.jpeg";
  }

  public getCompanyName(): string {
    return 'MockTech'
  }
}
