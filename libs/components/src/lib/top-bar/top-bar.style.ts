import { css } from 'lit';

export const styles = [
  css`
    :host {
      display: block;
      height: var(--a-top-bar-height);
    }

    .default-content {
      width: 100%;
      display: flex;
      align-items: center;
    }

    header {
      position: fixed;
      inset: 0 0 auto 0;
      display: flex;
      align-items: center;
      box-sizing: border-box;
      padding: 12px 16px;
      background-color: var(--md-sys-color-primary-container);
      color: var(--md-sys-color-on-primary-container);
      z-index: 12;
    }

    .title,
    .title slot::slotted(*) {
      color: var(--md-sys-color-primary);
      font-size: 22px;
      text-decoration: none;
      padding-inline: 12px;
      position: relative;
      outline: none;
      vertical-align: middle;
    }

    .end {
      display: flex;
      flex: 1;
      flex-direction: row-reverse;
    }
  `,
];
