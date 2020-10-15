import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import { LimitedTextField, LimitedTextFieldProps } from '../components';

export default {
    title: 'LimitedTextField',
    component: LimitedTextField,
} as Meta;

const Template: Story<LimitedTextFieldProps> = (args) => (
    <LimitedTextField {...args} />
);

export const LimitedTextFieldStory = Template.bind({});
LimitedTextFieldStory.args = {
    maxCount: 30,
};
