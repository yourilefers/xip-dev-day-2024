import { html, LitElement } from 'lit';
import { customElement } from 'lit/decorators.js';
import { styles } from './panes.style';

@customElement('a-panes')
export class PanesComponent extends LitElement {
  static override styles = styles;

  override render() {
    return html`<div class="panes">
      <div class="pane content" part="content">
        <div class="scroll-wrapper">
          <div class="content">
            <slot></slot>
          </div>
        </div>
      </div>

      <div class="pane side" part="side">
        <div class="scroll-wrapper">
          <div class="content">
            <slot name="side"></slot>
          </div>
        </div>
      </div>
    </div>`;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'a-panes': PanesComponent;
  }
}
