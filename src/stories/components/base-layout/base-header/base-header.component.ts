import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CurrentlyLoggedInUser } from '../../../CurrentlyLoggedInUser';
import { BaseLinearGradientComponent } from '../../base-components/base-linear-gradient/base-linear-gradient.component';

@Component({
  selector: 'base-header',
  standalone: true,
  imports: [CommonModule, BaseLinearGradientComponent],
  templateUrl: './base-header.component.html',
  styleUrls: ['./base-header.component.scss'],
})
export class BaseHeaderComponent {
  @Input() public currentlyLoggedInUser!: CurrentlyLoggedInUser;
  @Input() public companyLogo = '';
  @Input() public compayName = '';
  @Output() public onLogin = new EventEmitter<Event>();
  @Output() public onLogout = new EventEmitter<Event>();
  @Output() public onCreateAccount = new EventEmitter<Event>();

  public getCompanyName(): string {
    return this.compayName != ''?  this.compayName : 'MockTech';
  }

  public getCompanyLogo(): string {
    return this.companyLogo != ''?  this.compayName : '../../assets/mock1.jpeg';
  }
}
