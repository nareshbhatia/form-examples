import React, { Fragment } from 'react';
import { CreditCardForm } from './CreditCardForm';

export const PaymentForm = () => {
    return (
        <Fragment>
            <h5 className="mb-3">Payment Method</h5>
            <div className="d-block my-3">
                <div className="form-check form-check-inline">
                    <input
                        id="credit"
                        value="credit"
                        name="paymentMethod"
                        type="radio"
                        className="form-check-input"
                        defaultChecked={true}
                    />
                    <label className="form-check-label" htmlFor="credit">
                        Credit card
                    </label>
                </div>
                <div className="form-check form-check-inline">
                    <input
                        id="bank"
                        value="bank"
                        name="paymentMethod"
                        type="radio"
                        className="form-check-input"
                    />
                    <label className="form-check-label" htmlFor="bank">
                        Bank account
                    </label>
                </div>
            </div>
            <CreditCardForm />
        </Fragment>
    );
};
