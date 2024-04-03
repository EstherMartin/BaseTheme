import { CommonModule } from '@angular/common';
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { FormControl, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { emailValidator } from '../validators/email.validator';

@Component({
  selector: 'base-normal-input',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, FormsModule],
  templateUrl: './base-normal-input.component.html',
  styleUrls: ['./base-normal-input.component.scss'],
})
export class BaseNormalInputComponent {
  @Input() size: 'small' | 'medium' | 'large' = 'large';
  @Input() type = 'text'
  @Input() disabled = false;
  @Input() label = 'Button';
  @Input() placeholder = '';
  @Input() formControl!: FormControl;
  @Output() onClick = new EventEmitter<Event>();
  public error = false;

  public get classes(): string[] {
    let sizeClass;
    switch (this.size) {
      case 'small':
        sizeClass = '--small';
        break;
      case 'medium':
        sizeClass = '--medium';
        break;
      case 'large':
        sizeClass = '--large';
        break;
      default:
        sizeClass = '--large';
    }
    return ['base-input', `base-input--${sizeClass}`];
  }

  public get isDisabled(): string {
    return this.disabled? 'disabled' : 'enabled';
  }

  public formControlValidators(): boolean {
    if (this.type === 'email') {
      this.formControl.setValidators([
        Validators.required,
        emailValidator(),
      ]);
    } else {
      this.formControl.setValidators(Validators.required);
    }

    this.formControl.updateValueAndValidity();
    this.error = this.formControl.invalid && this.formControl.touched;
    return this.error;
  }

  public getErrorMessage(): string {
    const errors = this.formControl.errors;
    if (errors) {
        if (errors['required']) {
            return 'Este campo es obligatorio.';
        } else if (errors['invalidEmail']) {
            return 'El email no es válido.';
        }
    }
    return '';
  }
}
