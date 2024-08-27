import { css, html, LitElement } from 'lit';
import { customElement } from 'lit/decorators.js';

@customElement('alert-component-2')
export class AlertComponent extends LitElement {
  static override styles = css`
    div {
      border: 1px solid black;
      display: flex;
      flex-direction: column;
      gap: 4px;
      padding: 8px;
    }
  `;

  override render() {
    return html`<div>
      <b><slot name="title"></slot></b>
      <slot>Ik ben een alert.</slot>
    </div>`;
  }
}
