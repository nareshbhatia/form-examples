import React, { Fragment } from 'react';
import { Order, PaymentMethodNames, ShippingMethodNames } from '../../models';

export interface OrderDetailProps {
    order: Order;
}

export const OrderDetail = ({ order }: OrderDetailProps) => {
    const {
        contactInfo,
        shippingAddress,
        shippingOptions,
        paymentMethod,
    } = order;

    return (
        <Fragment>
            <h4 className="text-muted">Order Detail</h4>
            <div className="border p-3">
                <h6 className="mb-0">Contact Information</h6>
                <p>Email: {contactInfo.email}</p>

                {shippingAddress !== undefined ? (
                    <Fragment>
                        <h6 className="mb-0">Shipping Address</h6>
                        <p>
                            {shippingAddress.firstName}{' '}
                            {shippingAddress.lastName}
                            <br />
                            {shippingAddress.address}
                            <br />
                            {shippingAddress.city}, {shippingAddress.state}{' '}
                            {shippingAddress.zip}
                        </p>
                    </Fragment>
                ) : null}

                <h6 className="mb-0">Shipping Options</h6>
                <p>
                    Shipping method:{' '}
                    {ShippingMethodNames[shippingOptions.shippingMethod]}
                    <br />
                    Gift wrapping: {shippingOptions.giftWrapping ? 'Yes' : 'No'}
                </p>

                <h6 className="mb-0">Payment Method</h6>
                <p>
                    {PaymentMethodNames[paymentMethod]}
                    <br />
                    Payment Details
                </p>
            </div>
        </Fragment>
    );
};
