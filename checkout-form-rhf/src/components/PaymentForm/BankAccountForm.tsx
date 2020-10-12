import React, { Fragment } from 'react';
import { useFormContext } from 'react-hook-form';
import { TextField } from '../Form';

export const BankAccountForm = () => {
    const { errors, register } = useFormContext();

    return (
        <Fragment>
            <div className="mb-3">
                <TextField
                    id="accountHolderName"
                    name="paymentMethod.accountHolderName"
                    label="Account holder's name"
                    ref={register}
                    error={errors.paymentMethod?.accountHolderName?.message}
                />
            </div>

            <div className="mb-3">
                <TextField
                    id="bankName"
                    name="paymentMethod.bankName"
                    label="Bank name"
                    ref={register}
                    error={errors.paymentMethod?.bankName?.message}
                />
            </div>

            <div className="row">
                <div className="col-md-6 mb-3">
                    <TextField
                        id="routingNumber"
                        name="paymentMethod.routingNumber"
                        label="Routing number"
                        ref={register}
                        error={errors.paymentMethod?.routingNumber?.message}
                    />
                </div>

                <div className="col-md-6 mb-3">
                    <TextField
                        id="accountNumber"
                        name="paymentMethod.accountNumber"
                        label="Account number"
                        ref={register}
                        error={errors.paymentMethod?.accountNumber?.message}
                    />
                </div>
            </div>
        </Fragment>
    );
};
