import React from 'react';
import { Meta } from '@storybook/react/types-6-0';
import { TextField } from '../components';

export default {
    title: 'TextField',
    component: TextField,
} as Meta;

export const TextFieldStory = () => <TextField label="Name" />;
TextFieldStory.storyName = 'TextField';

export const TextFieldErrorStory = () => {
    return (
        <TextField
            label="Name"
            error={{
                key: 'validations.stringMin',
                values: {
                    min: 2,
                },
            }}
        />
    );
};
TextFieldErrorStory.storyName = 'TextField Error';
