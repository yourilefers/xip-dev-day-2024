import type { Meta } from '@storybook/web-components';
import { html } from 'lit';
import { PanesComponent } from './panes.component';

const component = new PanesComponent();

const meta: Meta<PanesComponent> = {
  title: 'Panes',
  component: component.tagName,
  render: (args: PanesComponent) =>
    html`<a-panes>
      <h1>Title</h1>
      <p>Some important content.</p>

      <p slot="side">Something on the side.</p>
    </a-panes>`,
};

export default meta;

export const Default = {};
