import {
  applyTheme,
  argbFromHex,
  themeFromSourceColor,
} from '@material/material-color-utilities';

import '@material/web/all.js';
import { styles as typescaleStyles } from '@material/web/typography/md-typescale-styles.js';

if (typescaleStyles.styleSheet) {
  document.adoptedStyleSheets.push(typescaleStyles.styleSheet);
}

const theme = themeFromSourceColor(argbFromHex('#151348'), [
  {
    name: 'custom-1',
    value: argbFromHex('#6056d6'),
    blend: true,
  },
  {
    name: 'success',
    value: argbFromHex('#2bdc5e'),
    blend: true,
  },
]);

const systemDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
applyTheme(theme, { target: document.body, dark: systemDark });
