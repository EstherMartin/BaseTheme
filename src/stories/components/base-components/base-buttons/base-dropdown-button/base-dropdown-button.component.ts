import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'base-dropdown-button',
  templateUrl: './base-dropdown-button.component.html',
  styleUrls: ['../base-buttons.component.scss'],
})
export class BaseDropdownButtonComponent {
  @Input() type: 'submit' | 'button' = 'button';
  @Input() disable = false;
  @Input() loading = false;
  @Input() label = 'Button';
  @Output() onClick = new EventEmitter<Event>();

  public get classes(): string[] {
    const mode = this.disable ? '--disable' : '--enable';
    const loading = this.loading ? '--loading' : '';
    return ['base-button', `base-button--`, mode, loading];
  }

  public getLabel(): string {
    return this.loading ? '' : this.label;
  }
}