import type { Meta, StoryObj } from '@storybook/angular';
import { BaseAlertsComponent } from './base-alerts.component';

const meta: Meta<BaseAlertsComponent> = {
  title: 'Base-Components/Base-Alerts',
  component: BaseAlertsComponent,
  tags: ['autodocs']
};

export default meta;
type Story = StoryObj<BaseAlertsComponent>;

export const Info: Story = {
  args: {
    type: 'info',
    title: 'Mensaje de información',
    message: 'Mensaje de prueba para el toast de Información',
  },
};

export const alert: Story = {
  args: {
    type: 'alert',
    title: 'Mensaje de Alerta',
    message: 'Mensaje de prueba para el toast de Alerta',
  },
};

export const error: Story = {
  args: {
    type: 'error',
    title: 'Mensaje de Error',
    message: 'Mensaje de prueba para el toast de Error',
  },
};

export const sucess: Story = {
  args: {
    type: 'sucess',
    title: 'Mensaje Satisfactorio',
    message: 'Mensaje de prueba para el toast Satisfactorio',
  },
};
