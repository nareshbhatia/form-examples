import React, { Fragment } from 'react';
import { useFormContext } from 'react-hook-form';
import { TextField } from '../Form';

export const AddressForm = () => {
    const { errors, register } = useFormContext();

    return (
        <Fragment>
            <h5 className="mb-3">Shipping Address</h5>
            <div className="row">
                <div className="col-md-6 mb-3">
                    <TextField
                        id="firstName"
                        name="shippingAddress.firstName"
                        label="First name"
                        ref={register}
                        error={errors.shippingAddress?.firstName?.message}
                    />
                </div>
                <div className="col-md-6 mb-3">
                    <TextField
                        id="lastName"
                        name="shippingAddress.lastName"
                        label="Last name"
                        ref={register}
                        error={errors.shippingAddress?.lastName?.message}
                    />
                </div>
            </div>

            <div className="mb-3">
                <TextField
                    id="address"
                    name="shippingAddress.address"
                    label="Address"
                    ref={register}
                    error={errors.shippingAddress?.address?.message}
                />
            </div>

            <div className="row">
                <div className="col-md-5 mb-3">
                    <TextField
                        id="city"
                        name="shippingAddress.city"
                        label="City"
                        ref={register}
                        error={errors.shippingAddress?.city?.message}
                    />
                </div>
                <div className="col-md-4 mb-3">
                    <TextField
                        id="state"
                        name="shippingAddress.state"
                        label="State"
                        ref={register}
                        error={errors.shippingAddress?.state?.message}
                    />
                </div>
                <div className="col-md-3 mb-3">
                    <TextField
                        id="zip"
                        name="shippingAddress.zip"
                        label="Zip"
                        ref={register}
                        error={errors.shippingAddress?.zip?.message}
                    />
                </div>
            </div>
        </Fragment>
    );
};
