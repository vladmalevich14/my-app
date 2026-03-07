import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import avatar from 'shared/assets/tests/avatar.jpg';
import { Currency } from '../../../Currency';
import { Country } from '../../../Country';
import { ProfileCard } from '../../../Profile';

export default {
    title: 'entities/ProfileCard',
    component: ProfileCard,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof ProfileCard>;

const Template: ComponentStory<typeof ProfileCard> = (args) => (
    <ProfileCard {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
    data: {
        username: 'test',
        lastname: 'testovich',
        first: 'Test',
        age: '132',
        country: Country.Kazakhstan,
        city: 'Kyiv',
        currency: Currency.EUR,
        avatar,
    },
};

export const withError = Template.bind({});
withError.args = {
    error: 'error',
};

export const Loading = Template.bind({});
Loading.args = {
    isLoading: true,
};
