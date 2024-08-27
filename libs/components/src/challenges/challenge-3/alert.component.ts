import { html, LitElement } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { style } from './alert.component.style';

@customElement('alert-component-3')
export class AlertComponent extends LitElement {
  static override styles = style;

  @property({ reflect: true })
  variant: 'primary' | 'success' | 'neutral' | 'warning' | 'danger' = 'primary';

  override render() {
    return html`<b><slot name="title"></slot></b>
      <slot>Ik ben een alert.</slot>`;
  }
}
