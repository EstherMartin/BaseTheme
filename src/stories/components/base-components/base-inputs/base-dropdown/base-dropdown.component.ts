import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

export interface DropdownValueOptions {
  value: number,
  displayName: string,
}

@Component({
  selector: 'base-dropdown',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, FontAwesomeModule, NgbModule],
  templateUrl: './base-dropdown.component.html',
  styleUrls: ['./base-dropdown.component.scss'],
})

export class BaseDropdownComponent {
  @Input() public size: 'small' | 'medium' | 'large' = 'large';
  @Input() public showMultiSelectNumber = 0;
  @Input() public label = 'Input';
  @Input() public items: DropdownValueOptions[]=[];
  @Input() public control!: FormControl;
  @Input() public formValidator!: string[];
  @Input() public errorMessage!: string;
  @Input() public required = false;
  @Input() public disabled = false;

  public get classes(): string[] {
    const sizeClass = `--${this.size}`;
    return ['base-dropdown', `base-dropdown${sizeClass}`];
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
