import React, { Fragment } from 'react';
import { useFormContext } from 'react-hook-form';
import { BankAccountForm } from './BankAccountForm';
import { CreditCardForm } from './CreditCardForm';
import { Radio } from '../Form';

export const PaymentForm = () => {
    const { errors, register, watch } = useFormContext();

    const paymentType = watch('paymentMethod.type');

    return (
        <Fragment>
            <h5 className="mb-3">Payment Method</h5>
            <Radio
                id="creditCard"
                value="creditCard"
                name="paymentMethod.type"
                label="Credit Card"
                ref={register}
                error={errors.paymentMethod?.type?.message}
            />
            <Radio
                id="bankAccount"
                value="bankAccount"
                name="paymentMethod.type"
                label="Bank Account"
                ref={register}
                error={errors.paymentMethod?.type?.message}
            />
            {paymentType === 'creditCard' ? (
                <CreditCardForm />
            ) : (
                <BankAccountForm />
            )}
        </Fragment>
    );
};
