import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BaseButtonComponent } from '../base-button/base-button.component';
import type { CurrentlyLoggedInUser } from '../../CurrentlyLoggedInUser';

@Component({
  selector: 'base-header',
  standalone: true,
  imports: [CommonModule, BaseButtonComponent],
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
    return '/assets/mock1.jpeg'
  }

  public getCompanyName(): string {
    return 'Compañia de pruebas'
  }
}
