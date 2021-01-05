import React, { Fragment } from 'react';
import { useFormContext } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import * as yup from 'yup';
import { TextField } from '../Form';

export const getBankAccountSchema = () =>
    yup.object().shape({
        accountHolderName: yup.string().required(),
        bankName: yup.string().required(),
        routingNumber: yup.string().required(),
        accountNumber: yup.string().required(),
    });

export const BankAccountForm = () => {
    const { t } = useTranslation();
    const { errors, register } = useFormContext();

    return (
        <Fragment>
            <div className="mb-3">
                <TextField
                    id="accountHolderName"
                    name="paymentMethod.accountHolderName"
                    label={t('text.accountHolderName')}
                    ref={register}
                    error={errors.paymentMethod?.accountHolderName?.message}
                />
            </div>

            <div className="mb-3">
                <TextField
                    id="bankName"
                    name="paymentMethod.bankName"
                    label={t('text.bankName')}
                    ref={register}
                    error={errors.paymentMethod?.bankName?.message}
                />
            </div>

            <div className="row">
                <div className="col-md-6 mb-3">
                    <TextField
                        id="routingNumber"
                        name="paymentMethod.routingNumber"
                        label={t('text.routingNumber')}
                        ref={register}
                        error={errors.paymentMethod?.routingNumber?.message}
                    />
                </div>

                <div className="col-md-6 mb-3">
                    <TextField
                        id="accountNumber"
                        name="paymentMethod.accountNumber"
                        label={t('text.accountNumber')}
                        ref={register}
                        error={errors.paymentMethod?.accountNumber?.message}
                    />
                </div>
            </div>
        </Fragment>
    );
};
