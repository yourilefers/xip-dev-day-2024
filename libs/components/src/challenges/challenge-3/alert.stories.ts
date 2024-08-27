import type { Meta } from '@storybook/web-components';
import { html, nothing } from 'lit';
import { AlertComponent } from './alert.component';

const component = new AlertComponent();

export default {
  title: 'Challenges/Challenge 3',
  component: component.tagName,
  argTypes: {
    variant: {
      control: 'select',
      options: ['primary', 'success', 'neutral', 'warning', 'danger'],
      description: 'Variant of the alert',
    },
    title: {
      control: 'text',
    },
    content: {
      control: 'text',
    },
  },
  args: {
    variant: 'primary',
    title: 'Melding',
    content: 'Dit is een melding.',
  },
  render: (args: AlertComponent) =>
    html`<alert-component-3 variant=${args.variant}
      >${args.title
        ? html`<span slot="title">${args.title}</span>`
        : ''}${args.content}</alert-component-3
    >`,
} as Meta<AlertComponent>;

export const Default = {};

export const Simple = {
  args: {
    variant: 'success',
    title: null,
    content: 'Dit is een simpele melding.',
  },
};

export const Success = {
  args: {
    variant: 'success',
  },
};

export const Neutral = {
  args: {
    variant: 'neutral',
  },
};

export const Warning = {
  args: {
    variant: 'warning',
    title: 'Waarschuwing',
    content: 'Weet je het heel zeker dat je dit wilt doen?',
  },
};

export const Danger = {
  args: {
    variant: 'danger',
    title: 'GEVAAR!',
    content: 'DOE HET NIET!',
  },
};
