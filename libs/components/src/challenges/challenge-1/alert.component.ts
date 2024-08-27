import { html, LitElement } from 'lit';
import { customElement } from 'lit/decorators.js';

@customElement('alert-component')
export class AlertComponent extends LitElement {
  override render() {
    return html`<div>Alert!</div>`;
  }
}
