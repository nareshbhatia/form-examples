import React, { Fragment } from 'react';
import { StringUtils } from '@react-force/utils';
import { Order, PaymentTypeNames, ShippingMethodNames } from '../../models';

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
                    <Fragment>
                        <h6 className="mb-0">Shipping Address</h6>
                        <p>
                            {shippingAddress.firstName}{' '}
                            {shippingAddress.lastName}
                            {!isBlank(shippingAddress.company) ? (
                                <Fragment>
                                    <br />
                                    {shippingAddress.company}
                                </Fragment>
                            ) : null}
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
                    {PaymentTypeNames[paymentMethod.type]}
                    <br />
                    {paymentMethod.type === 'creditCard' &&
                    !isBlank(paymentMethod.nameOnCard) ? (
                        <Fragment>
                            {paymentMethod.nameOnCard}
                            <br />
                            Card number: {paymentMethod.cardNumber}
                            <br />
                            Expiration: {paymentMethod.expiration}
                            <br />
                            CVV: {paymentMethod.cvv}
                        </Fragment>
                    ) : null}
                    {paymentMethod.type === 'bankAccount' &&
                    !isBlank(paymentMethod.accountHolderName) ? (
                        <Fragment>
                            {paymentMethod.accountHolderName}
                            <br />
                            {paymentMethod.bankName}
                            <br />
                            Routing number: {paymentMethod.routingNumber}
                            <br />
                            Account number: {paymentMethod.accountNumber}
                        </Fragment>
                    ) : null}
                </p>
            </div>
        </Fragment>
    );
};
