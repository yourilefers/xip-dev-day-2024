import type { Meta } from '@storybook/web-components';
import { html } from 'lit';
import { TopBarComponent } from './top-bar.component';

const component = new TopBarComponent();

const meta: Meta<TopBarComponent> = {
  title: 'Top bar',
  component: component.tagName,
  render: (args: TopBarComponent) =>
    html`<a-top-bar title="Top bar">
      <span>end</span>
    </a-top-bar>`,
};

export default meta;

export const Default = {};
