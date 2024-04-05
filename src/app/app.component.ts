import { Component } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, UntypedFormControl } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { BaseNormalInputComponent } from '../stories/components/base-inputs/base-normal-input/base-normal-input.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FormsModule, ReactiveFormsModule, BaseNormalInputComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  myForm: FormGroup;

  constructor() {
    this.myForm = new FormGroup({
      enableInput: new UntypedFormControl(),
    });

    console.log(this.getEnableInput());
  }

  public getEnableInput(): UntypedFormControl {
    console.log('Valor del input:', this.myForm.get('enableInput')?.value);
    return this.myForm.get('enableInput') as FormControl;
  }
}
