import { LitElement, html } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { styles } from './example.styles';

@customElement('example-component')
export class ExampleComponent extends LitElement {
  static override styles = styles;

  @property({ type: String })
  hint: string = 'Some hint';

  @property({ type: Number })
  count: number = 0;

  override render() {
    return html`
      <div class="card">
        <button @click=${this.#onClick} part="button">
          count is ${this.count}
        </button>
      </div>
      <p class="hint">${this.hint}</p>
    `;
  }

  #onClick() {
    this.count++;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'example-component': ExampleComponent;
  }
}
