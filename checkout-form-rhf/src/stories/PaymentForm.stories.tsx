import React, { Fragment, useState } from 'react';
import { yupResolver } from '@hookform/resolvers/yup';
import { Meta } from '@storybook/react/types-6-0';
import { FormProvider, useForm } from 'react-hook-form';
import * as yup from 'yup';
import { PaymentForm, getPaymentSchema, PaymentView } from '../components';
import { PaymentMethod } from '../models';

export default {
    title: 'PaymentForm',
    component: PaymentForm,
} as Meta;

interface Order {
    paymentMethod: PaymentMethod;
}

export const PaymentFormStory = () => {
    const [order, setOrder] = useState<Order>({
        paymentMethod: {
            type: 'creditCard',
            nameOnCard: '',
            cardNumber: '',
            expiration: '',
            cvv: 0,
        },
    });
    const { paymentMethod } = order;

    const orderSchema = yup.object().shape({
        paymentMethod: getPaymentSchema(),
    });    
    const methods = useForm<Order>({
        mode: 'onBlur',
        defaultValues: order,
        resolver: yupResolver(orderSchema),
    });
    const { handleSubmit } = methods;

    const onSubmit = (changedOrder: Order) => {
        setOrder(changedOrder);
    };

    return (
        <Fragment>
            <FormProvider {...methods}>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <PaymentForm />

                    <div className="mt-2">
                        <button className="btn btn-primary" type="submit">
                            Submit
                        </button>
                    </div>
                </form>
            </FormProvider>
            <div className="mt-4">
                <h5 className="mb-2">Form Values</h5>
                <PaymentView paymentMethod={paymentMethod} />
            </div>
        </Fragment>
    );
};
PaymentFormStory.storyName = 'PaymentForm';
