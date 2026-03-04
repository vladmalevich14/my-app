import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Select } from 'shared/ui/Select/Select';

export default {
    title: 'shared/Select',
    component: Select,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Select>;

const Template: ComponentStory<typeof Select> = (args) => <Select {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    label: 'test',
    options: [
        { value: '123', content: 'ewdfasf' },
        { value: '456', content: 'dfgsdfg' },
    ],
};
