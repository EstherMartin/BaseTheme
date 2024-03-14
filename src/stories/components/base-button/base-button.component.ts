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
  @Input() disable = false;
  @Input() label = 'Button';
  @Output() onClick = new EventEmitter<Event>();

  public get classes(): string[] {
    const mode = this.disable ? '--enable' : '--disable';
    return ['base-button', `base-button--}`, mode];
  }
}
