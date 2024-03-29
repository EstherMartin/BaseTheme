import type { Meta, StoryObj } from '@storybook/angular';
import { fn } from '@storybook/test';
import { BaseNormalInputComponent } from './base-normal-input.component';

const meta: Meta<BaseNormalInputComponent> = {
  title: 'Base-Components/Inputs/Base-Normal-Input',
  component: BaseNormalInputComponent,
  tags: ['autodocs'],
  args: { onClick: fn() },
};

export default meta;
type Story = StoryObj<BaseNormalInputComponent>;

export const Enable: Story = {
  args: {
    label: 'Enable',
  },
};

export const Disable: Story = {
  args: {
    label: 'Disable',
  },
};
