import React, { Fragment } from 'react';
import { useFormContext } from 'react-hook-form';
import { CreditCardForm } from './CreditCardForm';
import { Radio } from '../Form';

export const PaymentForm = () => {
    const { errors, register } = useFormContext();

    return (
        <Fragment>
            <h5 className="mb-3">Payment Method</h5>
            <Radio
                id="creditCard"
                value="creditCard"
                name="paymentMethod"
                label="Credit Card"
                ref={register}
                error={errors.paymentMethod?.message}
            />
            <Radio
                id="bankAccount"
                value="bankAccount"
                name="paymentMethod"
                label="Bank Account"
                ref={register}
                error={errors.paymentMethod?.message}
            />
            <CreditCardForm />
        </Fragment>
    );
};
