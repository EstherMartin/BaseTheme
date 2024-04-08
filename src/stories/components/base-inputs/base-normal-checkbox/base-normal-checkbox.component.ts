import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@Component({
  selector: 'base-normal-checkbox',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, FontAwesomeModule],
  templateUrl: './base-normal-checkbox.component.html',
  styleUrls: ['./base-normal-checkbox.component.scss'],
})

export class BaseNormalCheckboxComponent {
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
      console.log(item)
    }
  }

  public get classes(): string[] {
    const sizeClass = `--${this.size}`;
    return ['base-checkbox', `base-checkbox${sizeClass}`];
  }

  public get checkboxBodyClasses(): string[] {
    const positionClass = `--${this.position}--${this.size}`;
    const sizeClass = `--${this.position}--${this.size}`;
    return ['base-body-checkbox', `base-body-checkbox${positionClass}${sizeClass}`];
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
