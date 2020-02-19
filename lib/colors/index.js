'use babel';

import tinycolor from 'tinycolor2';
import writeConfigFile from '../helper/write-config-file';
import toggleClassName from '../helper/toggle-class-name';
import toCamelCase from '../helper/to-camel-case';
import colorTemplates from '../color-templates.json';
import buildColorSettings from './build-color-settings';

atom.config.onDidChange('atom-sun-glass-ui.colors.abaseColor', ({ newValue }) => {
    if (atom.config.get('atom-sun-glass-ui.colors.genAccent')) {
        const accentColor = tinycolor(newValue.toHexString())
            .complement()
            .saturate(20)
            .lighten(5);

        return atom.config.set('atom-sun-glass-ui.colors.accentColor', accentColor.toRgbString());
    }

    return writeConfigFile(
        buildColorSettings(
            newValue, atom.config.get('atom-sun-glass-ui.colors.accentColor'),
        ),
        true,
    );
});

atom.config.onDidChange('atom-sun-glass-ui.colors.predefinedColor', (value) => {
    const newValue = toCamelCase(value.newValue);

    atom.config.set('atom-sun-glass-ui.colors.abaseColor', colorTemplates[newValue].base);
    atom.config.set('atom-sun-glass-ui.colors.accentColor', colorTemplates[newValue].accent);
});

atom.config.onDidChange('atom-sun-glass-ui.colors.accentColor', ({ newValue }) => (
    writeConfigFile(
        buildColorSettings(
            atom.config.get('atom-sun-glass-ui.colors.abaseColor'), newValue,
        ),
        true,
    )
));

atom.config.observe('atom-sun-glass-ui.colors.paintCursor', value => toggleClassName('amu-paint-cursor', value));
