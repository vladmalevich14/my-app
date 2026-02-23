import { ComponentMeta, ComponentStory } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { Text, TextTheme } from './Text';

export default {
    title: 'shared/Text',
    component: Text,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Text>;

const Template: ComponentStory<typeof Text> = (args) => <Text {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    children: 'Text',
    title: 'Title',
    text: 'Text',
};

export const Error = Template.bind({});
Error.args = {
    children: 'Text',
    title: 'Title',
    text: 'Text',
    theme: TextTheme.ERROR,
};

export const onlyTitle = Template.bind({});
onlyTitle.args = {
    children: 'Text',
    title: 'Title',
};

export const onlyText = Template.bind({});
onlyText.args = {
    children: 'Text',
    text: 'Text',
};

export const PrimaryDark = Template.bind({});
PrimaryDark.args = {
    children: 'Text',
    title: 'Title',
    text: 'Text',
};
PrimaryDark.decorators = [ThemeDecorator(Theme.DARK)];

export const onlyTitleDark = Template.bind({});
onlyTitleDark.args = {
    children: 'Text',
    title: 'Title',
};
onlyTitleDark.decorators = [ThemeDecorator(Theme.DARK)];

export const onlyTextDark = Template.bind({});
onlyTextDark.args = {
    children: 'Text',
    text: 'Text',
};
onlyTextDark.decorators = [ThemeDecorator(Theme.DARK)];
