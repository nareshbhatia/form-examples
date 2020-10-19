import React, { Fragment } from 'react';
import { useFormContext } from 'react-hook-form';
import * as yup from 'yup';
import { TextField } from '../Form';

export const addressSchema = yup.object().shape({
    firstName: yup.string().required('First name is a required field').min(2),
    lastName: yup.string().required('Last name is a required field').min(2),
    company: yup.string(),
    address: yup.string().required('Address is a required field'),
    city: yup.string().required('City is a required field'),
    state: yup.string().required('State is a required field'),
    zip: yup.string().required('Zip is a required field'),
});

export interface AddressFormProps {
    title?: string;

    /** parent name e.g. "shippingAddress" */
    parentName: string;
}

export const AddressForm = ({ title, parentName }: AddressFormProps) => {
    const { errors, register } = useFormContext();

    return (
        <Fragment>
            {title !== undefined ? <h5 className="mb-3">{title}</h5> : null}
            <div className="row">
                <div className="col-md-6 mb-3">
                    <TextField
                        id="firstName"
                        name={`${parentName}.firstName`}
                        label="First name"
                        ref={register}
                        error={errors[parentName]?.firstName?.message}
                    />
                </div>
                <div className="col-md-6 mb-3">
                    <TextField
                        id="lastName"
                        name={`${parentName}.lastName`}
                        label="Last name"
                        ref={register}
                        error={errors[parentName]?.lastName?.message}
                    />
                </div>
            </div>

            <div className="mb-3">
                <TextField
                    id="company"
                    name={`${parentName}.company`}
                    label="Company (optional)"
                    ref={register}
                    error={errors[parentName]?.company?.message}
                />
            </div>

            <div className="mb-3">
                <TextField
                    id="address"
                    name={`${parentName}.address`}
                    label="Address"
                    ref={register}
                    error={errors[parentName]?.address?.message}
                />
            </div>

            <div className="row">
                <div className="col-md-5 mb-3">
                    <TextField
                        id="city"
                        name={`${parentName}.city`}
                        label="City"
                        ref={register}
                        error={errors[parentName]?.city?.message}
                    />
                </div>
                <div className="col-md-4 mb-3">
                    <TextField
                        id="state"
                        name={`${parentName}.state`}
                        label="State"
                        ref={register}
                        error={errors[parentName]?.state?.message}
                    />
                </div>
                <div className="col-md-3 mb-3">
                    <TextField
                        id="zip"
                        name={`${parentName}.zip`}
                        label="Zip"
                        ref={register}
                        error={errors[parentName]?.zip?.message}
                    />
                </div>
            </div>
        </Fragment>
    );
};
