import React, { Fragment } from 'react';

export const BankAccountForm = () => {
    return (
        <Fragment>
            <div className="mb-3">
                <label htmlFor="bk-account-holder-name">
                    Name on bank account
                </label>
                <input
                    id="bk-account-holder-name"
                    type="text"
                    className="form-control form-control-sm"
                />
                <div className="invalid-feedback">
                    Please enter your the account holder's name.
                </div>
            </div>

            <div className="mb-3">
                <label htmlFor="bk-name">Bank name</label>
                <input
                    id="bk-name"
                    type="text"
                    className="form-control form-control-sm"
                />
                <div className="invalid-feedback">
                    Please enter the name of the bank.
                </div>
            </div>

            <div className="row">
                <div className="col-md-6 mb-3">
                    <label htmlFor="bk-routing-number">Routing number</label>
                    <input
                        id="bk-routing-number"
                        type="text"
                        className="form-control form-control-sm"
                    />
                    <small className="text-muted">9 digits - no spaces</small>
                    <div className="invalid-feedback">
                        Routing number is required
                    </div>
                </div>
                <div className="col-md-6 mb-3">
                    <label htmlFor="cc-number">Account number</label>
                    <input
                        id="bk-account-number"
                        type="text"
                        className="form-control form-control-sm"
                    />
                    <small className="text-muted">
                        9-12 digits - no spaces
                    </small>
                    <div className="invalid-feedback">
                        Account number is required
                    </div>
                </div>
            </div>
        </Fragment>
    );
};
