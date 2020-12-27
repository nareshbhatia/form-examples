import React, { Fragment } from 'react';
import { useFormContext } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import * as yup from 'yup';
import { TextField } from '../Form';

export const addressSchema = yup.object().shape({
    firstName: yup.string().required().min(2),
    lastName: yup.string().required().min(2),
    company: yup.string(),
    address: yup.string().required(),
    city: yup.string().required(),
    state: yup.string().required(),
    zip: yup.string().required(),
});

export interface AddressFormProps {
    title?: string;

    /** parent name e.g. "shippingAddress" */
    parentName: string;
}

export const AddressForm = ({ title, parentName }: AddressFormProps) => {
    const { t } = useTranslation();
    const { errors, register } = useFormContext();

    return (
        <Fragment>
            {title !== undefined ? <h5 className="mb-3">{title}</h5> : null}
            <div className="row">
                <div className="col-md-6 mb-3">
                    <TextField
                        id="firstName"
                        name={`${parentName}.firstName`}
                        label={t('text.firstName')}
                        ref={register}
                        error={errors[parentName]?.firstName?.message}
                    />
                </div>
                <div className="col-md-6 mb-3">
                    <TextField
                        id="lastName"
                        name={`${parentName}.lastName`}
                        label={t('text.lastName')}
                        ref={register}
                        error={errors[parentName]?.lastName?.message}
                    />
                </div>
            </div>

            <div className="mb-3">
                <TextField
                    id="company"
                    name={`${parentName}.company`}
                    label={t('text.companyOptional')}
                    ref={register}
                    error={errors[parentName]?.company?.message}
                />
            </div>

            <div className="mb-3">
                <TextField
                    id="address"
                    name={`${parentName}.address`}
                    label={t('text.address')}
                    ref={register}
                    error={errors[parentName]?.address?.message}
                />
            </div>

            <div className="row">
                <div className="col-md-5 mb-3">
                    <TextField
                        id="city"
                        name={`${parentName}.city`}
                        label={t('text.city')}
                        ref={register}
                        error={errors[parentName]?.city?.message}
                    />
                </div>
                <div className="col-md-4 mb-3">
                    <TextField
                        id="state"
                        name={`${parentName}.state`}
                        label={t('text.state')}
                        ref={register}
                        error={errors[parentName]?.state?.message}
                    />
                </div>
                <div className="col-md-3 mb-3">
                    <TextField
                        id="zip"
                        name={`${parentName}.zip`}
                        label={t('text.zip')}
                        ref={register}
                        error={errors[parentName]?.zip?.message}
                    />
                </div>
            </div>
        </Fragment>
    );
};
