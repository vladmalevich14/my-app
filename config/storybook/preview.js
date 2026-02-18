const { addDecorator } = require('@storybook/react');
const { StyleDecorator } = require('../../src/shared/config/storybook/StyleDecorator/StyleDecorator');
const { ThemeDecorator } = require('../../src/shared/config/storybook/ThemeDecorator/ThemeDecorator');
const { Theme } = require('../../src/app/providers/ThemeProvider');
const { RouterDecorator } = require('../../src/shared/config/storybook/RouterDecorator/RouterDecorator');

module.exports = {
    parameters: {
        actions: { argTypesRegex: "^on[A-Z].*" },
        controls: {
            matchers: {
                color: /(background|color)$/i,
                date: /Date$/i,
            },
        },
    },
};

addDecorator(StyleDecorator);
addDecorator(ThemeDecorator(Theme.LIGHT));
addDecorator(RouterDecorator);
