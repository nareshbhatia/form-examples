import React, { Fragment } from 'react';
import { useFormContext } from 'react-hook-form';

export const ContactInfoForm = () => {
    const { errors, register } = useFormContext();

    return (
        <Fragment>
            <h5 className="mb-3">Contact Information</h5>
            <div className="mb-3">
                <label htmlFor="email">Email</label>
                <input
                    id="email"
                    name="contactInfo.email"
                    type="text"
                    className="form-control form-control-sm"
                    ref={register}
                />
                {errors.contactInfo?.email !== undefined ? (
                    <div className="helper-text text-danger">
                        {errors.contactInfo?.email.message}
                    </div>
                ) : null}
            </div>
        </Fragment>
    );
};
