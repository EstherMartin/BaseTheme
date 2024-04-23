import type { Meta, StoryObj } from '@storybook/angular';
import { fn } from '@storybook/test';
import { BaseDropdownButtonComponent } from './base-dropdown-button.component';

const meta: Meta<BaseDropdownButtonComponent> = {
  title: 'Base-Components/Buttons/Dropdown_Button',
  component: BaseDropdownButtonComponent,
  tags: ['autodocs'],
  args: { onClick: fn() },
};

export default meta;
type Story = StoryObj<BaseDropdownButtonComponent>;

export const Enable: Story = {
  args: {
    label: 'Enable',
    disable: false,
  },
};

export const Disable: Story = {
  args: {
    label: 'Disable',
    disable: true,
  },
};

export const Loading: Story = {
  args: {
    disable: false,
    loading: true,
  },
};
