import React, { Fragment, useState } from 'react';
import { yupResolver } from '@hookform/resolvers/yup';
import { Meta } from '@storybook/react/types-6-0';
import { FormProvider, useForm } from 'react-hook-form';
import * as yup from 'yup';
import { ContactInfoForm, getContactInfoSchema } from '../components';
import { ContactInfo } from '../models';

export default {
    title: 'ContactInfoForm',
    component: ContactInfoForm,
} as Meta;

interface Order {
    contactInfo: ContactInfo;
}

export const ContactInfoFormStory = () => {
    const [order, setOrder] = useState<Order>({
        contactInfo: {
            email: '',
        },
    });
    const { contactInfo } = order;

    const orderSchema = yup.object().shape({
        contactInfo: getContactInfoSchema(),
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
                    <ContactInfoForm />

                    <div className="mt-2">
                        <button className="btn btn-primary" type="submit">
                            Submit
                        </button>
                    </div>
                </form>
            </FormProvider>
            <div className="mt-4">
                <h5 className="mb-2">Form Values</h5>
                <p>{contactInfo.email}</p>
            </div>
        </Fragment>
    );
};
ContactInfoFormStory.storyName = 'ContactInfoForm';
