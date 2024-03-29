import { CommonModule } from '@angular/common';
import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'base-normal-input',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './base-normal-input.component.html',
  styleUrls: ['./base-normal-input.component.scss'],
})
export class BaseNormalInputComponent {
  @Input() size: 'small' | 'large' | 'medium' | 'large' = 'large';
  @Input() disable = false;
  @Input() label = 'Button';
  @Output() onClick = new EventEmitter<Event>();

  public get classes(): string[] {
    let sizeClass;
    switch (this.size) {
      case 'small':
        sizeClass = 'col-12';
        break;
      case 'medium':
        sizeClass = 'col-6';
        break;
      case 'large':
        sizeClass = 'col-3';
        break;
      default:
        sizeClass = 'col';
    }
    return ['base-button', sizeClass];
  }
}
