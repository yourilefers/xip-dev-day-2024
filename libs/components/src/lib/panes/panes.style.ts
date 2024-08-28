import { css } from 'lit';

export const styles = [
  css`
    :host {
      display: block;
    }

    .panes {
      display: flex;
      justify-content: start;
      gap: var(--a-panes-gap);
      margin-inline: var(--a-panes-margin);
    }

    .pane {
      background-color: var(--md-sys-color-inverse-on-surface);
      border-radius: var(--a-panes-gap);
      box-sizing: border-box;
      height: calc(100dvh - var(--a-top-bar-height) - var(--a-panes-gap));
      overflow: auto;
      width: 100%;

      .scroll-wrapper {
        border-radius: inherit;
        box-sizing: border-box;
        max-height: 100%;
        padding-block: var(--a-panes-pane-padding-block);
        overflow-y: auto;
      }

      .content {
        padding-inline: var(--a-panes-pane-padding-inline);
      }

      &.side {
        width: auto;
        box-sizing: border-box;
      }
    }
  `,
];
