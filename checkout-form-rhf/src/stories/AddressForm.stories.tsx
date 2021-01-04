import React, { Fragment, useState } from 'react';
import { yupResolver } from '@hookform/resolvers/yup';
import { StringUtils } from '@react-force/utils';
import { Meta } from '@storybook/react/types-6-0';
import { FormProvider, useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import * as yup from 'yup';
import {
    AddressForm,
    getAddressSchema,
    AddressView,
    Checkbox,
} from '../components';
import { address as InitialBillingAddress } from '../data';
import { Address, newAddress } from '../models';

const { isBlank } = StringUtils;

export default {
    title: 'AddressForm',
    component: AddressForm,
} as Meta;

// -----------------------------
// Single Address Story
// -----------------------------
interface Company {
    address: Address;
}

export const SingleAddressStory = () => {
    const [company, setCompany] = useState<Company>({
        address: newAddress(),
    });
    const { address } = company;

    const companySchema = yup.object().shape({
        address: getAddressSchema(),
    });

    const methods = useForm<Company>({
        mode: 'onBlur',
        defaultValues: company,
        resolver: yupResolver(companySchema),
    });
    const { handleSubmit } = methods;

    const onSubmit = (changedCompany: Company) => {
        setCompany(changedCompany);
    };

    return (
        <Fragment>
            <FormProvider {...methods}>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <AddressForm title="Address" parentName="address" />

                    <div className="mt-2">
                        <button className="btn btn-primary" type="submit">
                            Submit
                        </button>
                    </div>
                </form>
            </FormProvider>
            <div className="mt-4">
                <h5 className="mb-2">Form Values</h5>
                {!isBlank(address.firstName) ? (
                    <AddressView address={address} />
                ) : null}
            </div>
        </Fragment>
    );
};
SingleAddressStory.storyName = 'Single Address';

// -----------------------------
// Multiple Address Story
// -----------------------------
interface Order {
    isShippingAddressSameAsBilling: boolean;
    billingAddress: Address;
    shippingAddress: Address;
}


export const MultipleAddressStory = () => {
    const { t } = useTranslation();
    const [order, setOrder] = useState<Order>({
        isShippingAddressSameAsBilling: false,
        billingAddress: InitialBillingAddress,
        shippingAddress: newAddress(),
    });
    const { billingAddress, shippingAddress } = order;
    const addressSchema = getAddressSchema()
    const orderSchema = yup.lazy((value) => {
        const order = value as Order;
        return yup.object().shape({
            isShippingAddressSameAsBilling: yup.boolean().required(),
            billingAddress: addressSchema,
            shippingAddress: order.isShippingAddressSameAsBilling
                ? yup.mixed().notRequired()
                : addressSchema,
        });
    });
    
    const methods = useForm<Order>({
        mode: 'onBlur',
        defaultValues: order,
        resolver: yupResolver(orderSchema),
    });
    const { errors, handleSubmit, register } = methods;

    const { watch } = methods;
    const isShippingAddressSameAsBilling = watch(
        'isShippingAddressSameAsBilling'
    );

    const onSubmit = (changedOrder: Order) => {
        setOrder(changedOrder);
    };

    return (
        <Fragment>
            <FormProvider {...methods}>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <AddressForm
                        title="Billing Address"
                        parentName="billingAddress"
                    />

                    <h5 className="mt-3 mb-2">{t('text.shippingAddress')}</h5>
                    <div className="mb-3">
                        <Checkbox
                            id="isShippingAddressSameAsBilling"
                            name="isShippingAddressSameAsBilling"
                            label="Same as billing address"
                            ref={register}
                            error={
                                errors.isShippingAddressSameAsBilling?.message
                            }
                        />
                    </div>
                    {isShippingAddressSameAsBilling ? null : (
                        <AddressForm parentName="shippingAddress" />
                    )}

                    <div className="mt-2">
                        <button className="btn btn-primary" type="submit">
                            Submit
                        </button>
                    </div>
                </form>
            </FormProvider>
            <div className="mt-4">
                <h5 className="mb-2">Form Values</h5>
                <div className="row">
                    <div className="col-6">
                        {!isBlank(billingAddress.firstName) ? (
                            <AddressView
                                label={t('text.billingAddress')}
                                address={billingAddress}
                            />
                        ) : null}
                    </div>
                    <div className="col-6">
                        {!isBlank(shippingAddress?.firstName) ? (
                            <AddressView
                                label={t('text.shippingAddress')}
                                address={shippingAddress}
                            />
                        ) : null}
                    </div>
                </div>
            </div>
        </Fragment>
    );
};
MultipleAddressStory.storyName = 'Multiple Address';
