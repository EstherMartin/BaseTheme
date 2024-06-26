import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@Component({
  selector: 'base-checkbox',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, FontAwesomeModule],
  templateUrl: './base-checkbox.component.html',
  styleUrls: ['./base-checkbox.component.scss'],
})

export class BaseCheckboxComponent {
  @Input() public size: 'small' | 'medium' | 'large' = 'large';
  @Input() public position: 'row' | 'column' = 'column';
  @Input() public label= 'checkBox Input';
  @Input() public disabled = false;
  @Input() public items: string[]=[];
  @Input() public required = false;
  @Input() public control!: FormControl;
  @Input() public formValidator!: string[];
  @Input() public errorMessage!: string;

  @Output() checked = new EventEmitter<string>();

  public onChange(item: string, event: Event) {
    let isChecked = event.target?.dispatchEvent
    if (isChecked) {
      this.checked.emit(item);
    }
  }

  public get classes(): string[] {
    const sizeClass = `--${this.size}`;
    return ['base-checkbox', `base-checkbox${sizeClass}`];
  }

  public get checkboxBodyClasses(): string[] {
    const positionClass = `--${this.position}`;
    return ['base-body-checkbox', `base-body-checkbox${positionClass}`];
  }

  public get errorClasses(): string[] {
    const sizeClass = `.--${this.size}`;
    return ['error-message-checkbox', `error-message-checkbox${sizeClass}`];
  }

  public get isDisabled(): string {
    return this.disabled ? 'disabled' : 'enabled';
  }

  public get isRequired(): string {
    return this.required ? 'required' : '';
  }

  public get hasErrorMessage(): boolean {
    return !!this.errorMessage;
  }
}
