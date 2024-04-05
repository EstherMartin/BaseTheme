import type { Meta, StoryObj } from '@storybook/angular';
import { BaseNormalInputComponent } from './base-normal-input.component';

const meta: Meta<BaseNormalInputComponent> = {
  title: 'Base-Components/Inputs/Base-Normal-Input',
  component: BaseNormalInputComponent,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<BaseNormalInputComponent>;

export const Enable: Story = {
  args: {
    label: 'Enable Input',
    placeholder: 'Enable',
    disabled: false,
    required: true,
  },
};

export const Disable: Story = {
  args: {
    label: 'Disable Input',
    placeholder:'Disable',
    disabled: true,
    required: false,
  },
};
