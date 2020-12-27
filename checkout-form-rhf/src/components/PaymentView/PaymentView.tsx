import React, { Fragment } from 'react';
import { StringUtils } from '@react-force/utils';
import { useTranslation } from 'react-i18next';
import { PaymentMethod } from '../../models';
import { PaymentTypeText } from './PaymentTypeText';

const { isBlank } = StringUtils;

export interface PaymentViewProps {
    paymentMethod: PaymentMethod;
}

export const PaymentView = ({ paymentMethod }: PaymentViewProps) => {
    const { t } = useTranslation();

    return (
        <Fragment>
            <h6 className="mb-0">{t('text.paymentMethod')}</h6>
            <p>
                <PaymentTypeText paymentType={paymentMethod.type} />
                <br />
                {paymentMethod.type === 'creditCard' &&
                !isBlank(paymentMethod.nameOnCard) ? (
                    <Fragment>
                        {paymentMethod.nameOnCard}
                        <br />
                        {t('text.cardNumber')}: {paymentMethod.cardNumber}
                        <br />
                        {t('text.expiration')}: {paymentMethod.expiration}
                        <br />
                        {t('text.cvv')}: {paymentMethod.cvv}
                    </Fragment>
                ) : null}
                {paymentMethod.type === 'bankAccount' &&
                !isBlank(paymentMethod.accountHolderName) ? (
                    <Fragment>
                        {paymentMethod.accountHolderName}
                        <br />
                        {paymentMethod.bankName}
                        <br />
                        {t('text.routingNumber')}: {paymentMethod.routingNumber}
                        <br />
                        {t('text.accountNumber')}: {paymentMethod.accountNumber}
                    </Fragment>
                ) : null}
            </p>
        </Fragment>
    );
};
