import React, { Fragment, useState } from 'react';
import { yupResolver } from '@hookform/resolvers/yup';
import { Meta } from '@storybook/react/types-6-0';
import { FormProvider, useForm } from 'react-hook-form';
import * as yup from 'yup';
import { ShippingOptionsForm, shippingOptionsSchema } from '../components';
import { ShippingMethodNames, ShippingOptions } from '../models';

export default {
    title: 'ShippingOptionsForm',
    component: ShippingOptionsForm,
} as Meta;

interface Order {
    shippingOptions: ShippingOptions;
}

const orderSchema = yup.object().shape({
    shippingOptions: shippingOptionsSchema,
});

export const ShippingOptionsFormStory = () => {
    const [order, setOrder] = useState<Order>({
        shippingOptions: {
            shippingMethod: 'ground',
            giftWrapping: false,
        },
    });
    const { shippingOptions } = order;

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
                    <ShippingOptionsForm onShippingMethodChanged={() => {}} />

                    <div className="mt-3">
                        <button className="btn btn-primary" type="submit">
                            Submit
                        </button>
                    </div>
                </form>
            </FormProvider>
            <div className="mt-4">
                <h5 className="mb-2">Form Values</h5>
                <p>
                    Shipping method:{' '}
                    {ShippingMethodNames[shippingOptions.shippingMethod]}
                    <br />
                    Gift wrapping: {shippingOptions.giftWrapping ? 'Yes' : 'No'}
                </p>
            </div>
        </Fragment>
    );
};
ShippingOptionsFormStory.storyName = 'ShippingOptionsForm';
