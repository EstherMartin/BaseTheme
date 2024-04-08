import type { Meta, StoryObj } from '@storybook/angular';
import { BaseNormalCheckboxComponent } from './base-normal-checkbox.component';

const meta: Meta<BaseNormalCheckboxComponent> = {
  title: 'Base-Components/Inputs/Base-Normal-CheckBox',
  component: BaseNormalCheckboxComponent,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<BaseNormalCheckboxComponent>;

export const Enable: Story = {
  args: {
    label : 'Enable Checkbox',
    items: ['item 1', 'item 2', 'item 3'],
    size: "small",
    position: 'row',
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
  },
};
