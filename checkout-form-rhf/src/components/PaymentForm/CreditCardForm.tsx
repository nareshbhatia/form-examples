import React, { Fragment } from 'react';

export const CreditCardForm = () => {
    return (
        <Fragment>
            <div className="row">
                <div className="col-md-6 mb-3">
                    <label htmlFor="cc-name">Name on card</label>
                    <input
                        id="cc-name"
                        type="text"
                        className="form-control form-control-sm"
                    />
                    <small className="text-muted">
                        Full name as displayed on card
                    </small>
                    <div className="invalid-feedback">
                        Name on card is required
                    </div>
                </div>
                <div className="col-md-6 mb-3">
                    <label htmlFor="cc-number">Credit card number</label>
                    <input
                        id="cc-number"
                        type="text"
                        className="form-control form-control-sm"
                    />
                    <div className="invalid-feedback">
                        Credit card number is required
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-md-3 mb-3">
                    <label htmlFor="cc-expiration">Expiration</label>
                    <input
                        id="cc-expiration"
                        type="text"
                        className="form-control form-control-sm"
                    />
                    <div className="invalid-feedback">
                        Expiration date required
                    </div>
                </div>
                <div className="col-md-3 mb-3">
                    <label htmlFor="cc-cvv">CVV</label>
                    <input
                        id="cc-cvv"
                        type="text"
                        className="form-control form-control-sm"
                    />
                    <div className="invalid-feedback">
                        Security code required
                    </div>
                </div>
            </div>
        </Fragment>
    );
};
