import React, { Fragment } from 'react';
import { useForm } from 'react-hook-form';
import { Order } from '../../models';

export interface ContactInfoFormProps {
    order: Order;
}

export const ContactInfoForm = ({ order }: ContactInfoFormProps) => {
    const { contactInfo } = order;
    const { register } = useForm();

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
                    defaultValue={contactInfo.email}
                    ref={register}
                />
                <div className="invalid-feedback">
                    Please enter a valid email address for shipping updates.
                </div>
            </div>
        </Fragment>
    );
};
