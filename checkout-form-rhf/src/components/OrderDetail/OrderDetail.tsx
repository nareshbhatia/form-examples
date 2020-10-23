import React, { Fragment } from 'react';
import { StringUtils } from '@react-force/utils';
import { Order, ShippingMethodNames } from '../../models';
import { AddressView } from '../AddressView';
import { PaymentView } from '../PaymentView';

const { isBlank } = StringUtils;

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

                {!isBlank(shippingAddress.firstName) ? (
                    <AddressView
                        label="Shipping Address"
                        address={shippingAddress}
                    />
                ) : null}

                <h6 className="mb-0">Shipping Options</h6>
                <p>
                    Shipping method:{' '}
                    {ShippingMethodNames[shippingOptions.shippingMethod]}
                    <br />
                    Gift wrapping: {shippingOptions.giftWrapping ? 'Yes' : 'No'}
                </p>

                <PaymentView paymentMethod={paymentMethod} />
            </div>
        </Fragment>
    );
};
