import React, { Fragment } from 'react';
import { useTranslation } from 'react-i18next';
import { PaymentType } from '../../models';

export interface PaymentTypeTextProps {
    paymentType: PaymentType;
}

export const PaymentTypeText = ({ paymentType }: PaymentTypeTextProps) => {
    const { t } = useTranslation();

    const PaymentTypeNames: { [key in PaymentType]: string } = {
        creditCard: t('text.creditCard'),
        bankAccount: t('text.bankAccount'),
    };

    return <Fragment>{PaymentTypeNames[paymentType]}</Fragment>;
};
