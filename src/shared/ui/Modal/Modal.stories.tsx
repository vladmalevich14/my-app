import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Modal } from './Modal';
import { ThemeDecorator } from '../../config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from '../../../app/providers/ThemeProvider';
import { OutlineDark } from '../Button/Button.stories';

export default {
    title: 'shared/Modal',
    component: Modal,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Modal>;

const Template: ComponentStory<typeof Modal> = (args) => <Modal {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    isOpen: true,
    children: 'fdpsklfpklsdklfokdsokfdsf sdfjksdkf pdsopkf opdskfop sdopf',
};

export const PrimaryDark = Template.bind({});
PrimaryDark.args = {
    isOpen: true,
    children: 'fdpsklfpklsdklfokdsokfdsf sdfjksdkf pdsopkf opdskfop sdopf',
};
PrimaryDark.decorators = [ThemeDecorator(Theme.DARK)];
