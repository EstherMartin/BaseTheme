import type { Meta, StoryObj } from '@storybook/angular';
import { fn } from '@storybook/test';
import { BaseButtonComponent } from './base-button.component';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories
const meta: Meta<BaseButtonComponent> = {
  title: 'Example/Button',
  component: BaseButtonComponent,
  tags: ['autodocs'],
  argTypes: {
    backgroundColor: {
      control: 'color',
    },
  },
  args: { onClick: fn() },
};

export default meta;
type Story = StoryObj<BaseButtonComponent>;

export const Primary: Story = {
  args: {
    primary: true,
    label: 'Button',
  },
};

export const Secondary: Story = {
  args: {
    label: 'Button',
  },
};

export const Large: Story = {
  args: {
    size: 'large',
    label: 'Button',
  },
};

export const Small: Story = {
  args: {
    size: 'small',
    label: 'Button',
  },
};
