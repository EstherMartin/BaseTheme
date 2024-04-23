import type { Meta, StoryObj } from '@storybook/angular';
import { BaseCheckboxComponent } from './base-checkbox.component';

const meta: Meta<BaseCheckboxComponent> = {
  title: 'Base-Components/Inputs/Base-CheckBox',
  component: BaseCheckboxComponent,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<BaseCheckboxComponent>;

export const Enable: Story = {
  args: {
    label : 'Enable Checkbox',
    items: ['item 1', 'item 2', 'item 3'],
    size: "small",
    position: 'column',
    disabled: false,
    required: true,
    errorMessage: 'mensaje de error de muestra'
  },
};

export const Disable: Story = {
  args: {
    label : 'Disable Checkbox',
    items: ['item 1', 'item 2', 'item 3'],
    disabled: true,
    required: false,
    position: 'row',
  },
};
