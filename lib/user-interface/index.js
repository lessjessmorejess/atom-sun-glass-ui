'use babel';

import toggleClassName from '../helper/toggle-class-name';

atom.config.observe('atom-sun-glass-ui.ui.panelShadows', (value) => {
    toggleClassName('amu-panel-shadows', value);
});

atom.config.observe('atom-sun-glass-ui.ui.panelContrast', (value) => {
    toggleClassName('amu-panel-contrast', value);
});

atom.config.observe('atom-sun-glass-ui.ui.useAnimations', (value) => {
    toggleClassName('amu-use-animations', value);
});
