import { CommonModule } from '@angular/common';
import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'base-button',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './base-button.component.html',
  styleUrls: ['./base-button.component.scss'],
})
export class BaseButtonComponent {
  @Input() type: 'submit' | 'button' = 'button';
  @Input() primary = false;
  @Input() backgroundColor?: string;
  @Input() size: 'small' | 'medium' | 'large' = 'medium';
  @Input() label = 'Button';
  @Output() onClick = new EventEmitter<Event>();

  public get classes(): string[] {
    const mode = this.primary ? 'base-button--primary' : 'base-button--secondary';

    return ['base-button', `base-button--${this.size}`, mode];
  }
}
