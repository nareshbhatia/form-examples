import React, { Suspense } from 'react';
import { addDecorator } from '@storybook/react';
import '../src/i18n';
import { Loading } from '../src/components';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../src/index.css';
import { yupLocale } from '../src/utils/yupLocale'
import { setLocale } from 'yup'

setLocale(yupLocale)

export const parameters = {
    actions: { argTypesRegex: '^on[A-Z].*' },
};

const StoryDecorator = (Story: any) => (
    <Suspense fallback={<Loading />}>
        <Story />
    </Suspense>
);

addDecorator(StoryDecorator);
