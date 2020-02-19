'use babel';

import setFontSize from './set-font-size';

atom.config.observe('atom-sun-glass-ui.fonts.fontSize', size => setFontSize(size));
