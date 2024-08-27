import { css } from 'lit';

export const style = css`
  :host {
    border: 1px solid #e4e4e7;
    border-block-start: 4px solid #3a82c1;
    border-radius: 8px;
    display: flex;
    flex-direction: row;
    font:
      400 16px/24px 'Roboto',
      sans-serif;
    padding: 24px;
  }

  div {
    display: flex;
    flex: 1;
    flex-direction: column;
    gap: 4px;
  }

  :host(:not([open])) {
    display: none;
  }

  :host([variant='success']) {
    border-block-start-color: #4ca154;
  }

  :host([variant='neutral']) {
    border-block-start-color: #525259;
  }

  :host([variant='warning']) {
    border-block-start-color: #cc7c2e;
  }

  :host([variant='danger']) {
    border-block-start-color: #ca3b32;
  }
`;
