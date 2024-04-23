import type { Meta, StoryObj } from '@storybook/angular';
import { BaseInputComponent } from './base-input.component';
import { UntypedFormControl } from '@angular/forms';

const meta: Meta<BaseInputComponent> = {
  title: 'Base-Components/Inputs/Base-Input',
  component: BaseInputComponent,
  tags: ['autodocs'],
  argTypes: {
    control: { control: 'object' },
  },
};

export default meta;
type Story = StoryObj<BaseInputComponent>;

export const Enable: Story = {
  args: {
    label: 'Enable Input',
    placeholder: 'Enable',
    size: "small",
    disabled: false,
    required: true,
    errorMessage: 'mensaje de error de muestra',
    control: new UntypedFormControl(),
  },
};

export const Disable: Story = {
  args: {
    label: 'Disable Input',
    placeholder:'Disable',
    disabled: true,
    required: false,
    control: new UntypedFormControl(),
  },
};
