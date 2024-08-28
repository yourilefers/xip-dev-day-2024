import type { Meta } from '@storybook/web-components';
import { html } from 'lit';
import { DigitalClockComponent } from './digital-clock.component';

const component = new DigitalClockComponent();

const meta: Meta<DigitalClockComponent> = {
  title: 'Digital clock',
  component: component.tagName,
  render: (args: DigitalClockComponent) =>
    html`<a-digital-clock></a-digital-clock>`,
};

export default meta;

export const Default = {};
