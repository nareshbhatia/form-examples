import React from 'react';
import { yupResolver } from '@hookform/resolvers/yup';
import { FormProvider, useForm } from 'react-hook-form';
import * as yup from 'yup';
import { Order, PaymentMethod, ShippingMethod } from '../../models';
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
    shippingAddress: yup.object().shape({
        firstName: yup
            .string()
            .required('First name is a required field')
            .min(2),
        lastName: yup.string().required('Last name is a required field').min(2),
        company: yup.string(),
        address: yup.string().required('Address is a required field'),
        city: yup.string().required('City is a required field'),
        state: yup.string().required('State is a required field'),
        zip: yup.string().required('Zip is a required field'),
    }),
    shippingOptions: yup.object().shape({
        shippingMethod: yup
            .string()
            .required('Shipping method is a required field'),
        giftWrapping: yup
            .boolean()
            .required('Gift wrapping is a required field'),
    }),
    paymentMethod: yup.lazy((value) => {
        if (value === undefined) {
            return yup.mixed().notRequired();
        }
        const paymentMethod = value as PaymentMethod;
        if (paymentMethod.type === 'creditCard') {
            return yup.object().shape({
                nameOnCard: yup.string().required('Name is a required field'),
                cardNumber: yup
                    .string()
                    .required('Card number is a required field'),
                expiration: yup
                    .string()
                    .required('Expiration is a required field'),
                cvv: yup.number().required('CVV is a required field'),
            });
        } else {
            return yup.object().shape({
                accountHolderName: yup
                    .string()
                    .required('Account holder name is a required field'),
                bankName: yup
                    .string()
                    .required('Bank name is a required field'),
                routingNumber: yup
                    .string()
                    .required('Routing number is a required field'),
                accountNumber: yup
                    .string()
                    .required('Account number is a required field'),
            });
        }
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

                <AddressForm
                    title="Shipping Address"
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
