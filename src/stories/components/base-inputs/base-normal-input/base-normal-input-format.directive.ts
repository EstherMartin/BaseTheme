import { Directive } from '@angular/core';
import { ControlValueAccessor, NgControl } from '@angular/forms';

@Directive({ selector: '[BaseNormalInputFormat]' })
export class BaseNormalInputComponent {
  public constructor(private readonly _ngControl: NgControl) {
    if (_ngControl.valueAccessor) {
      this._trimValueAccessor(_ngControl.valueAccessor);
    }
  }

  private _trimValueAccessor(valueAccessor: ControlValueAccessor): void {
    const original = valueAccessor.registerOnChange;

    valueAccessor.registerOnChange = (fn: (_: unknown) => void) => {
      return original.call(valueAccessor, (value: unknown) => {
        return fn(typeof value === 'string' ? value.trim() : value);
      });
    };
  }
}
