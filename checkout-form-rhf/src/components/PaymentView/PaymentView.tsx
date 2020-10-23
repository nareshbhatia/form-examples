import React, { Fragment } from 'react';
import { StringUtils } from '@react-force/utils';
import { PaymentMethod, PaymentTypeNames } from '../../models';

const { isBlank } = StringUtils;

export interface PaymentViewProps {
    paymentMethod: PaymentMethod;
}

export const PaymentView = ({ paymentMethod }: PaymentViewProps) => {
    return (
        <Fragment>
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
        </Fragment>
    );
};
