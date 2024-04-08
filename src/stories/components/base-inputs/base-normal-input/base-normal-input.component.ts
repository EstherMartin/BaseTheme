import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

export enum SizeValues {
  Small = 'small',
  Medium = 'medium',
  Large = 'large',
}

@Component({
  selector: 'base-normal-input',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, FontAwesomeModule],
  templateUrl: './base-normal-input.component.html',
  styleUrls: ['./base-normal-input.component.scss'],
})

export class BaseNormalInputComponent {
  @Input() public size: 'small' | 'medium' | 'large' = 'large';
  @Input() public type = 'text';
  @Input() public disabled = false;
  @Input() public label = 'Button';
  @Input() public placeholder = '';
  @Input() public required = false;
  @Input() public control!: FormControl;
  @Input() public formValidator!: string[];
  @Input() public errorMessage!: string;

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
    console.log(!!this.errorMessage)
    return !!this.errorMessage;
  }
}
