import type { Meta } from '@storybook/web-components';
import { html } from 'lit';
import { AlertComponent } from './alert.component';

const component = new AlertComponent();

const meta: Meta<AlertComponent> = {
  title: 'Challenges/Challenge 1',
  component: component.tagName,
  argTypes: {},
  args: {},
  render: (args: AlertComponent) => html`<alert-component></alert-component>`,
};

export default meta;

export const Default = {};
