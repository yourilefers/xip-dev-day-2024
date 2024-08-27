import { html, LitElement } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { style } from './alert.component.style';

@customElement('alert-component-4')
export class AlertComponent extends LitElement {
  static override styles = style;

  @property({ reflect: true })
  variant: 'primary' | 'success' | 'neutral' | 'warning' | 'danger' = 'primary';

  @property({ type: Boolean, reflect: true })
  closeable = true;

  #open = true;

  @property({ type: Boolean, reflect: true })
  get open() {
    return this.#open;
  }

  set open(value: boolean) {
    const oldValue = this.#open;
    this.#open = value;
    this.requestUpdate('open', oldValue);
  }

  override render() {
    const close = this.closeable
      ? html`<button @click=${this.close} aria-label="Close alert">X</button>`
      : '';

    return this.#open
      ? html`<div>
            <b><slot name="title"></slot></b>
            <slot>Ik ben een alert.</slot>
          </div>
          ${close}`
      : '';
  }

  close = () => {
    this.open = false;
    this.dispatchEvent(new CustomEvent('close'));
  };
}
