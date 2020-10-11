import React from 'react';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { Order, ShippingMethod } from '../../models';
import { AddressForm } from '../AddressForm';
import { ContactInfoForm } from '../ContactInfoForm';
import { PaymentForm } from '../PaymentForm';
import { ShippingOptionsForm } from '../ShippingOptionsForm';
import { CheckoutActions } from './CheckoutActions';

const schema = yup.object().shape({
    contactInfo: yup.object().shape({
        email: yup.string().email().required(),
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
    const { handleSubmit } = useForm({
        resolver: yupResolver(schema),
    });

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <ContactInfoForm order={order} />
            <hr className="mt-4 mb3" />

            <AddressForm />
            <hr className="mt-4 mb3" />

            <ShippingOptionsForm
                order={order}
                onShippingMethodChanged={onShippingMethodChanged}
            />
            <hr className="mt-4 mb3" />

            <PaymentForm />

            <CheckoutActions order={order} />
        </form>
    );
};
