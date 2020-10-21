import React, { Fragment, useState } from 'react';
import { yupResolver } from '@hookform/resolvers/yup';
import { StringUtils } from '@react-force/utils';
import { Meta } from '@storybook/react/types-6-0';
import { FormProvider, useForm } from 'react-hook-form';
import * as yup from 'yup';
import {
    AddressForm,
    addressSchema,
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
// Single Address Form
// -----------------------------
interface Company {
    address: Address;
}

const companySchema = yup.object().shape({
    address: addressSchema,
});

const CompanyForm = () => {
    const [company, setCompany] = useState<Company>({
        address: newAddress(),
    });
    const methods = useForm<Company>({
        mode: 'onBlur',
        defaultValues: company,
        resolver: yupResolver(companySchema),
    });

    const onSubmit = (changedCompany: Company) => {
        setCompany(changedCompany);
    };

    const { address } = company;

    return (
        <Fragment>
            <FormProvider {...methods}>
                <form onSubmit={methods.handleSubmit(onSubmit)}>
                    <AddressForm title="Address" parentName="address" />

                    <div className="mt-2">
                        <button className="btn btn-primary" type="submit">
                            Submit
                        </button>
                    </div>
                </form>
            </FormProvider>
            <div className="mt-3">
                <h5 className="mb-3">Form Values</h5>
                {!isBlank(address.firstName) ? (
                    <AddressView address={address} />
                ) : null}
            </div>
        </Fragment>
    );
};

export const SingleAddress = () => <CompanyForm />;

// -----------------------------
// Multiple Address Form
// -----------------------------
interface Order {
    isShippingAddressSameAsBilling: boolean;
    billingAddress: Address;
    shippingAddress: Address;
}

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

const CheckoutForm = () => {
    const [order, setOrder] = useState<Order>({
        isShippingAddressSameAsBilling: false,
        billingAddress: InitialBillingAddress,
        shippingAddress: newAddress(),
    });
    const methods = useForm<Order>({
        mode: 'onBlur',
        defaultValues: order,
        resolver: yupResolver(orderSchema),
    });

    const { watch } = methods;
    const isShippingAddressSameAsBilling = watch(
        'isShippingAddressSameAsBilling'
    );

    const { billingAddress, shippingAddress } = order;

    const onSubmit = (changedOrder: Order) => {
        setOrder(changedOrder);
    };

    return (
        <Fragment>
            <FormProvider {...methods}>
                <form onSubmit={methods.handleSubmit(onSubmit)}>
                    <AddressForm
                        title="Billing Address"
                        parentName="billingAddress"
                    />

                    <h5 className="mt-3 mb-2">Shipping Address</h5>
                    <div className="mb-3">
                        <Checkbox
                            id="isShippingAddressSameAsBilling"
                            name="isShippingAddressSameAsBilling"
                            label="Same as billing address"
                            ref={methods.register}
                            error={
                                methods.errors.isShippingAddressSameAsBilling
                                    ?.message
                            }
                        />
                    </div>
                    {isShippingAddressSameAsBilling ? null : (
                        <AddressForm parentName="shippingAddress" />
                    )}

                    <div className="mt-2">
                        <button className="btn btn-primary" type="submit">
                            Place your order
                        </button>
                    </div>
                </form>
            </FormProvider>
            <div className="mt-3">
                <h5 className="mb-3">Form Values</h5>
                <div className="row">
                    <div className="col-6">
                        {!isBlank(billingAddress.firstName) ? (
                            <AddressView
                                label="Billing Address"
                                address={billingAddress}
                            />
                        ) : null}
                    </div>
                    <div className="col-6">
                        {!isBlank(shippingAddress?.firstName) ? (
                            <AddressView
                                label="Shipping Address"
                                address={shippingAddress}
                            />
                        ) : null}
                    </div>
                </div>
            </div>
        </Fragment>
    );
};

export const MultipleAddresses = () => <CheckoutForm />;
