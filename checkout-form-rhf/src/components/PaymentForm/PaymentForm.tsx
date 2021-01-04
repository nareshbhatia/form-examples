import React, { Fragment } from 'react';
import { useFormContext } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import * as yup from 'yup';
import { PaymentMethod } from '../../models';
import { Radio } from '../Form';
import { BankAccountForm, getBankAccountSchema } from './BankAccountForm';
import { CreditCardForm, getCreditCardSchema } from './CreditCardForm';

export const getPaymentSchema = () => (yup.lazy((value) => {
    if (value === undefined) {
        return yup.mixed().notRequired();
    }
    const paymentMethod = value as PaymentMethod;
    return paymentMethod.type === 'creditCard'
        ? getCreditCardSchema()
        : getBankAccountSchema();
}));

export const PaymentForm = () => {
    const { t } = useTranslation();
    const { errors, register, watch } = useFormContext();

    const paymentType = watch('paymentMethod.type');

    return (
        <Fragment>
            <h5 className="mb-3">{t('text.paymentMethod')}</h5>
            <Radio
                id="creditCard"
                value="creditCard"
                name="paymentMethod.type"
                label={t('text.creditCard')}
                ref={register}
                error={errors.paymentMethod?.type?.message}
            />
            <Radio
                id="bankAccount"
                value="bankAccount"
                name="paymentMethod.type"
                label={t('text.bankAccount')}
                ref={register}
                error={errors.paymentMethod?.type?.message}
            />
            {paymentType === 'creditCard' ? (
                <CreditCardForm />
            ) : (
                <BankAccountForm />
            )}
        </Fragment>
    );
};
