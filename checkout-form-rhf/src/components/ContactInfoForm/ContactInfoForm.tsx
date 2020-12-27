import React, { Fragment } from 'react';
import { useFormContext } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import * as yup from 'yup';
import { TextField } from '../Form';

export const contactInfoSchema = yup.object().shape({
    email: yup
        .string()
        .email('Email must be a valid email')
        .required('Email is a required field'),
});

export const ContactInfoForm = () => {
    const { t } = useTranslation();
    const { errors, register } = useFormContext();

    return (
        <Fragment>
            <h5 className="mb-3">{t('text.contactInfo')}</h5>
            <div className="mb-3">
                <TextField
                    id="email"
                    name="contactInfo.email"
                    label={t('text.email')}
                    ref={register}
                    error={errors.contactInfo?.email?.message}
                />
            </div>
        </Fragment>
    );
};
