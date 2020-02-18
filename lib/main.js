'use babel';

import setFontSize from './fonts/set-font-size';
import toggleClassName from './helper/toggle-class-name';
import './colors';
import './fonts';
import './tab-bar';
import './user-interface';

const classNames = {
    // Fonts
    'amu-paint-cursor': atom.config.get('atom-sun-glass-ui.colors.paintCursor'),

    // Tabs settings
    'amu-compact-tab-bar': atom.config.get('atom-sun-glass-ui.tabs.compactTabs'),
    'amu-no-tab-min-width': atom.config.get('atom-sun-glass-ui.tabs.noTabMinWidth'),
    'amu-tinted-tab-bar': atom.config.get('atom-sun-glass-ui.tabs.tintedTabBar'),
    'amu-stretched-tabs': atom.config.get('atom-sun-glass-ui.tabs.stretchedTabs'),

    // General UI settings
    'amu-use-animations': atom.config.get('atom-sun-glass-ui.ui.useAnimations'),
    'amu-panel-contrast': atom.config.get('atom-sun-glass-ui.ui.panelContrast'),
    'amu-panel-shadows': atom.config.get('atom-sun-glass-ui.ui.panelShadows'),
};

export default {
    activate() {
        Object.keys(classNames).forEach(className => (
            toggleClassName(className, classNames[className])),
        );

        setFontSize(atom.config.get('atom-sun-glass-ui.fonts.fontSize'));
    },

    deactivate() {
        // Reset all the things!
        Object.keys(classNames).forEach(className => toggleClassName(className, false));
        setFontSize(null);
    },
};
