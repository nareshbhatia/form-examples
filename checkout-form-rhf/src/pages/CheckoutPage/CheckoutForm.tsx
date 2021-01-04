import React from 'react';
import { yupResolver } from '@hookform/resolvers/yup';
import { FormProvider, useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import * as yup from 'yup';
import { Order, ShippingMethod } from '../../models';
import {
    AddressForm,
    getAddressSchema,
    ContactInfoForm,
    getContactInfoSchema,
    PaymentForm,
    getPaymentSchema,
    ShippingOptionsForm,
    shippingOptionsSchema,
} from '../../components';
import { CheckoutActions } from './CheckoutActions';

export interface CheckoutFormProps {
    order: Order;
    onSubmit: (order: Order) => void;
    onShippingMethodChanged: (shippingMethod: ShippingMethod) => void;
}

export const CheckoutForm = ({
    order,
    onSubmit,
    onShippingMethodChanged,
}: CheckoutFormProps) => {
    const schema = yup.object().shape({
        contactInfo: getContactInfoSchema(),
        shippingAddress: getAddressSchema(),
        shippingOptions: shippingOptionsSchema,
        paymentMethod: getPaymentSchema(),
    })
    
    const { t } = useTranslation();
    const methods = useForm<Order>({
        mode: 'onBlur',
        defaultValues: order,
        resolver: yupResolver(schema),
    });

    return (
        <FormProvider {...methods}>
            <form onSubmit={methods.handleSubmit(onSubmit)}>
                <ContactInfoForm />
                <hr className="mt-4 mb3" />

                <AddressForm
                    title={t('text.shippingAddress')}
                    parentName="shippingAddress"
                />
                <hr className="mt-4 mb3" />

                <ShippingOptionsForm
                    onShippingMethodChanged={onShippingMethodChanged}
                />
                <hr className="mt-4 mb3" />

                <PaymentForm />

                <CheckoutActions
                    orderTotal={Order.getOrderTotal(order).orderTotal}
                />
            </form>
        </FormProvider>
    );
};
