import React, { Fragment } from 'react';
import { useFormContext } from 'react-hook-form';
import { TextField } from '../Form';

export const CreditCardForm = () => {
    const { errors, register } = useFormContext();

    return (
        <Fragment>
            <div className="row">
                <div className="col-md-6 mb-3">
                    <TextField
                        id="nameOnCard"
                        name="paymentMethod.nameOnCard"
                        label="Name on card"
                        ref={register}
                        error={errors.paymentMethod?.nameOnCard?.message}
                    />
                </div>
                <div className="col-md-6 mb-3">
                    <TextField
                        id="cardNumber"
                        name="paymentMethod.cardNumber"
                        label="Credit card number"
                        ref={register}
                        error={errors.paymentMethod?.cardNumber?.message}
                    />
                </div>
            </div>
            <div className="row">
                <div className="col-md-3 mb-3">
                    <TextField
                        id="expiration"
                        name="paymentMethod.expiration"
                        label="Expiration"
                        ref={register}
                        error={errors.paymentMethod?.expiration?.message}
                    />
                </div>
                <div className="col-md-3 mb-3">
                    <TextField
                        id="cvv"
                        name="paymentMethod.cvv"
                        label="CVV"
                        ref={register}
                        error={errors.paymentMethod?.cvv?.message}
                    />
                </div>
            </div>
        </Fragment>
    );
};
