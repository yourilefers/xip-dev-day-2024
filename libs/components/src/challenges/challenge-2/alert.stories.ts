import type { Meta } from '@storybook/web-components';
import { html } from 'lit';
import { AlertComponent } from './alert.component';

const component = new AlertComponent();

export default {
  title: 'Challenges/Challenge 2',
  component: component.tagName,
  argTypes: {},
  args: {},
  render: (args: AlertComponent) =>
    html`<alert-component-2></alert-component-2>`,
} as Meta<AlertComponent>;

export const Default = {};

export const WithContent: Meta<AlertComponent> = {
  title: 'Challenges/Challenge 2/With content',
  component: component.tagName,
  argTypes: {},
  args: {},
  render: (args: AlertComponent) =>
    html`<alert-component-2>
      <span slot="title">Foutmelding</span>
      Er is iets niet goed gegaan.
    </alert-component-2>`,
};
