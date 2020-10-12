import React, { Fragment } from 'react';
import { Order, ShippingMethodNames } from '../../models';

export interface OrderDetailProps {
    order: Order;
}

export const OrderDetail = ({ order }: OrderDetailProps) => {
    const { contactInfo, shippingOptions } = order;

    return (
        <Fragment>
            <h4 className="text-muted">Order Detail</h4>
            <div className="border p-3">
                <h6 className="mb-0">Contact Information</h6>
                <p>Email: {contactInfo.email}</p>

                <h6 className="mb-0">Shipping Options</h6>
                <p>
                    Shipping method:{' '}
                    {ShippingMethodNames[shippingOptions.shippingMethod]}
                    <br />
                    Gift wrapping: {shippingOptions.giftWrapping ? 'Yes' : 'No'}
                </p>
            </div>
        </Fragment>
    );
};
