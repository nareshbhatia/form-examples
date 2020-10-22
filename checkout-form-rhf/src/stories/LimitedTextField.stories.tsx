import React from 'react';
import { Meta } from '@storybook/react/types-6-0';
import { LimitedTextField } from '../components';

export default {
    title: 'LimitedTextField',
    component: LimitedTextField,
} as Meta;

export const LimitedTextFieldStory = () => <LimitedTextField maxCount={10} />;
LimitedTextFieldStory.storyName = 'LimitedTextField';

// ----- NOTE: Template syntax below does not work -----
// const Template: Story<LimitedTextFieldProps> = (args) => (
//     <LimitedTextField {...args} />
// );
//
// export const LimitedTextFieldStory = Template.bind({});
// LimitedTextFieldStory.args = {
//     maxCount: 30,
// };
// LimitedTextFieldStory.storyName = 'LimitedTextField';
