import React, { Fragment, useState } from 'react';
import { yupResolver } from '@hookform/resolvers/yup';
import { Meta } from '@storybook/react/types-6-0';
import { FormProvider, useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import * as yup from 'yup';
import {
    ShippingMethodText,
    ShippingOptionsForm,
    shippingOptionsSchema,
} from '../components';
import { ShippingOptions } from '../models';

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
    const { t } = useTranslation();
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
                    {t('text.shippingMethod')}:{' '}
                    <ShippingMethodText
                        shippingMethod={shippingOptions.shippingMethod}
                    />
                    <br />
                    {t('text.giftWrapping')}:{' '}
                    {shippingOptions.giftWrapping
                        ? t('text.yes')
                        : t('text.no')}
                </p>
            </div>
        </Fragment>
    );
};
ShippingOptionsFormStory.storyName = 'ShippingOptionsForm';
