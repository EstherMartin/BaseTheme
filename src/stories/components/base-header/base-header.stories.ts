import type { Meta, StoryObj } from '@storybook/angular';

import { BaseHeaderComponent } from './base-header.component';
import { fn } from '@storybook/test';

const meta: Meta<BaseHeaderComponent> = {
  title: 'Base-Components/Header',
  component: BaseHeaderComponent,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
  args: {
    onLogin: fn(),
    onLogout: fn(),
    onCreateAccount: fn(),
  },
};

export default meta;
type Story = StoryObj<BaseHeaderComponent>;

export const LoggedIn: Story = {
  args: {
    currentlyLoggedInUser: {
      displayName: 'Usuario de pruebas',
    },
  },
};

export const LoggedOut: Story = {};
