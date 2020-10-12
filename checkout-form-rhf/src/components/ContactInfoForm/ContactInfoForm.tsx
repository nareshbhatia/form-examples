import React, { Fragment } from 'react';
import { useFormContext } from 'react-hook-form';
import { TextField } from '../Form';

export const ContactInfoForm = () => {
    const { errors, register } = useFormContext();

    return (
        <Fragment>
            <h5 className="mb-3">Contact Information</h5>
            <div className="mb-3">
                <TextField
                    id="email"
                    name="contactInfo.email"
                    label="Email"
                    type="text"
                    ref={register}
                    error={errors.contactInfo?.email?.message}
                />
            </div>
        </Fragment>
    );
};
