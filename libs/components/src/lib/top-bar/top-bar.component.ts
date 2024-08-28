import { html, LitElement } from 'lit';
import { customElement } from 'lit/decorators.js';
import { styles } from './top-bar.style';

@customElement('a-top-bar')
export class TopBarComponent extends LitElement {
  static override styles = styles;

  override render() {
    return html`<header>
      <div class="default-content">
        <section class="start">
          <md-icon-button class="menu-button" title="Open navigation menu">
            <md-icon slot="selected">menu</md-icon>
            <md-icon>menu_open</md-icon>
          </md-icon-button>
        </section>

        <section class="title">
          <slot name="title">${this.title}</slot>
        </section>

        <section class="end">
          <slot></slot>
        </section>
      </div>
    </header>`;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'a-top-bar': TopBarComponent;
  }
}
