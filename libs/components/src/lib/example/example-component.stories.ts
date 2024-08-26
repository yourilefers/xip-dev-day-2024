import type { Meta } from '@storybook/web-components';
import { html } from 'lit';
import { ExampleComponent } from './example-component';

const component = new ExampleComponent();

const meta: Meta<ExampleComponent> = {
  title: 'Example Component',
  component: component.tagName,
  argTypes: {
    hint: {
      control: 'text',
      description: 'hint text',
    },
    count: {
      control: 'number',
      description: 'start value',
      defaultValue: {
        summary: 0,
      },
    },
  },
  args: {
    hint: 'Some hint',
    count: 0,
  },
  render: (args: ExampleComponent) =>
    html`<example-component hint=${args.hint} .count=${args.count} />,`,
};

export default meta;

export const Default = {};
