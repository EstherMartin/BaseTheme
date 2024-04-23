import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@Component({
  selector: 'base-input',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, FontAwesomeModule],
  templateUrl: './base-input.component.html',
  styleUrls: ['./base-input.component.scss'],
})

export class BaseInputComponent {
  @Input() public size: 'small' | 'medium' | 'large' = 'large';
  @Input() public type = 'text';
  @Input() public label = 'Input';
  @Input() public placeholder = '';
  @Input() public control!: FormControl;
  @Input() public formValidator!: string[];
  @Input() public errorMessage!: string;
  @Input() public required = false;
  @Input() public disabled = false;

  public get classes(): string[] {
    const sizeClass = `--${this.size}`;
    return ['base-input', `base-input${sizeClass}`];
  }

  public get errorClasses(): string[] {
    const sizeClass = `.--${this.size}`;
    return ['error-message-input', `error-message-input${sizeClass}`];
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
