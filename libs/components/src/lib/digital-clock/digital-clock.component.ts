import { css, html, LitElement } from 'lit';
import { customElement, state } from 'lit/decorators.js';

@customElement('a-digital-clock')
export class DigitalClockComponent extends LitElement {
  static override styles = css`
    :host {
      color: var(--md-sys-color-primary);
      display: block;
      font-size: 22px;
    }
  `;

  @state()
  private date!: string;

  @state()
  private time!: string;

  constructor() {
    super();

    setInterval(this.#updateTime, 1000);
    this.#updateTime();
  }

  override render() {
    return html`<div>
      <span aria-label="Current date">${this.date}</span>
      <span aria-label="Current time">${this.time}</span>
    </div>`;
  }

  #updateTime = () => {
    this.date = new Date().toLocaleDateString();

    this.time = new Date().toLocaleTimeString([], {
      hour: '2-digit',
      minute: '2-digit',
    });
  };
}

declare global {
  interface HTMLElementTagNameMap {
    'a-digital-clock': DigitalClockComponent;
  }
}
