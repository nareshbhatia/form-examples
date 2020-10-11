import React from 'react';
import { yupResolver } from '@hookform/resolvers/yup';
import { FormProvider, useForm } from 'react-hook-form';
import * as yup from 'yup';
import { Order, ShippingMethod } from '../../models';
import {
    AddressForm,
    ContactInfoForm,
    PaymentForm,
    ShippingOptionsForm,
} from '../../components';
import { CheckoutActions } from './CheckoutActions';

const schema = yup.object().shape({
    contactInfo: yup.object().shape({
        email: yup
            .string()
            .email('Email must be a valid email')
            .required('Email is a required field'),
    }),
});

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

                <AddressForm />
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
