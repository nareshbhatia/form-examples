import React from 'react';
import { Meta } from '@storybook/react/types-6-0';
import { TextField } from '../components';

export default {
    title: 'TextField',
    component: TextField,
} as Meta;

export const TextFieldStory = () => <TextField label="Name" />;
TextFieldStory.storyName = 'TextField';

export const TextFieldErrorStory = () => (
    <TextField label="Name" error="Name is a required field" />
);
TextFieldErrorStory.storyName = 'TextField Error';
