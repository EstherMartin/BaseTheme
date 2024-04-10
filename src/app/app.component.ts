import { Component } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, UntypedFormControl } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { BaseInputComponent } from '../stories/components/base-inputs/base-input/base-input.component';
import { BaseCheckboxComponent } from '../stories/components/base-inputs/base-checkbox/base-checkbox.component';
import { BaseDropdownComponent, DropdownValueOptions } from "../stories/components/base-inputs/base-dropdown/base-dropdown.component";

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss',
    imports: [
      RouterOutlet, 
      FormsModule, 
      ReactiveFormsModule, 
      BaseInputComponent, 
      BaseCheckboxComponent, 
      BaseDropdownComponent,
    ]
})
export class AppComponent {
  public myForm: FormGroup;
  public selectedItems: string[] = [];
  public dropdownItems!: DropdownValueOptions[];

  constructor() {
    this.myForm = new FormGroup({
      enableInput: new UntypedFormControl(),
      enableCheckbox: new UntypedFormControl(),
      enableDropdown: new UntypedFormControl(),
    });

    this.dropdownItems = [
      {
        displayName: 'item 1',
        value: 1,
      },
      {
        displayName: 'item 2',
        value: 2,
      },
      {
        displayName: 'item 3',
        value: 3,
      },
    ]
  }

  public getEnableInput(): UntypedFormControl {
    console.log('Valor del input:', this.myForm.get('enableInput')?.value);
    return this.myForm.get('enableInput') as FormControl;
  }

  public getEnableCheckbox(): UntypedFormControl {
    return this.myForm.get('enableCheckbox') as FormControl;
  }

  public onCheckboxChecked(item: string) {
    const index = this.selectedItems.indexOf(item);
    if (index === -1) {
      this.selectedItems.push(item);
    } else {
      this.selectedItems.splice(index, 1);
    }
    console.log('Items seleccionados:', this.selectedItems);
  }

  public getEnableDropdown(): UntypedFormControl {
    console.log('Valor del dropdown:', this.myForm.get('enableDropdown')?.value);
    return this.myForm.get('enableDropdown') as FormControl;
  }
}
