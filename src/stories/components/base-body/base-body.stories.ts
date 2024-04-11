import type { Meta, StoryObj } from '@storybook/angular';
import { within, userEvent, expect } from '@storybook/test';
import { BaseBodyComponent } from './base-body.component';

const meta: Meta<BaseBodyComponent> = {
  title: 'Base-Components/Body',
  component: BaseBodyComponent,
  parameters: {
    layout: 'fullscreen',
  },
};

export default meta;
type Story = StoryObj<BaseBodyComponent>;

export const LoggedOut: Story = {};

export const LoggedIn: Story = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const loginButton = canvas.getByRole('button', { name: /Log in/i });
    await expect(loginButton).toBeInTheDocument();
    await userEvent.click(loginButton);
    await expect(loginButton).not.toBeInTheDocument();

    const logoutButton = canvas.getByRole('button', { name: /Log out/i });
    await expect(logoutButton).toBeInTheDocument();
  },
};
