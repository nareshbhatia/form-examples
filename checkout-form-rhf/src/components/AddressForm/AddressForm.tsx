import React, { Fragment } from 'react';

export const AddressForm = () => {
    return (
        <Fragment>
            <h5 className="mb-3">Shipping Address</h5>
            <div className="row">
                <div className="col-md-6 mb-3">
                    <label htmlFor="firstName">First name</label>
                    <input
                        id="firstName"
                        type="text"
                        className="form-control form-control-sm"
                    />
                    <div className="invalid-feedback">
                        Valid first name is required.
                    </div>
                </div>
                <div className="col-md-6 mb-3">
                    <label htmlFor="lastName">Last name</label>
                    <input
                        id="lastName"
                        type="text"
                        className="form-control form-control-sm"
                    />
                    <div className="invalid-feedback">
                        Valid last name is required.
                    </div>
                </div>
            </div>

            <div className="mb-3">
                <label htmlFor="address">Address</label>
                <input
                    id="address"
                    type="text"
                    className="form-control form-control-sm"
                />
                <div className="invalid-feedback">
                    Please enter your shipping address.
                </div>
            </div>

            <div className="row">
                <div className="col-md-5 mb-3">
                    <label htmlFor="city">City</label>
                    <input
                        id="city"
                        type="text"
                        className="form-control form-control-sm"
                    />
                    <div className="invalid-feedback">
                        Please select a valid city.
                    </div>
                </div>
                <div className="col-md-4 mb-3">
                    <label htmlFor="state">State</label>
                    <select
                        id="state"
                        className="custom-select custom-select-sm d-block w-100"
                    >
                        <option value="">Choose...</option>
                        <option>California</option>
                    </select>
                    <div className="invalid-feedback">
                        Please provide a valid state.
                    </div>
                </div>
                <div className="col-md-3 mb-3">
                    <label htmlFor="zip">Zip</label>
                    <input
                        id="zip"
                        type="text"
                        className="form-control form-control-sm"
                    />
                    <div className="invalid-feedback">Zip code required.</div>
                </div>
            </div>
        </Fragment>
    );
};
