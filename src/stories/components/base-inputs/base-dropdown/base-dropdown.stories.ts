import type { Meta, StoryObj } from '@storybook/angular';
import { UntypedFormControl } from '@angular/forms';
import { BaseDropdownComponent } from './base-dropdown.component';

const meta: Meta<BaseDropdownComponent> = {
  title: 'Base-Components/Inputs/Base-Dropdown',
  component: BaseDropdownComponent,
  tags: ['autodocs'],
  argTypes: {
    control: { control: 'object' },
  },
};

export default meta;
type Story = StoryObj<BaseDropdownComponent>;

export const Enable: Story = {
  args: {
    label: 'Enable Dropdown',
    items: [
      {
        displayName: 'item 1',
        value: 1,
      },
      {
        displayName: 'item 2',
        value: 1,
      },
      {
        displayName: 'item 3',
        value: 1,
      },
    ],
    size: "small",
    disabled: false,
    required: true,
    errorMessage: 'mensaje de error de muestra',
    control: new UntypedFormControl(),
  },
};

export const Disable: Story = {
  args: {
    label: 'Disable Dropdown',
    items: [
      {
        displayName: 'item 1',
        value: 1,
      },
      {
        displayName: 'item 2',
        value: 1,
      },
      {
        displayName: 'item 3',
        value: 1,
      },
    ],
    disabled: true,
    required: false,
    control: new UntypedFormControl(),
  },
};
