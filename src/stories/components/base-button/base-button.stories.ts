import type { Meta, StoryObj } from '@storybook/angular';
import { fn } from '@storybook/test';
import { BaseButtonComponent } from './base-button.component';

const meta: Meta<BaseButtonComponent> = {
  title: 'Example/Base-Button',
  component: BaseButtonComponent,
  tags: ['autodocs'],
  args: { onClick: fn() },
};

export default meta;
type Story = StoryObj<BaseButtonComponent>;

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
