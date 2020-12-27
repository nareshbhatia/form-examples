import React, { Fragment } from 'react';
import { StringUtils } from '@react-force/utils';
import { useTranslation } from 'react-i18next';
import { Order } from '../../models';
import { AddressView } from '../AddressView';
import { PaymentView } from '../PaymentView';
import { ShippingMethodText } from './ShippingMethodText';

const { isBlank } = StringUtils;

export interface OrderDetailProps {
    order: Order;
}

export const OrderDetail = ({ order }: OrderDetailProps) => {
    const { t } = useTranslation();
    const {
        contactInfo,
        shippingAddress,
        shippingOptions,
        paymentMethod,
    } = order;

    return (
        <Fragment>
            <h4 className="text-muted">{t('text.orderDetail')}</h4>
            <div className="border p-3">
                <h6 className="mb-0">{t('text.contactInfo')}</h6>
                <p>Email: {contactInfo.email}</p>

                {!isBlank(shippingAddress.firstName) ? (
                    <AddressView
                        label={t('text.shippingAddress')}
                        address={shippingAddress}
                    />
                ) : null}

                <h6 className="mb-0">{t('text.shippingOptions')}</h6>
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

                <PaymentView paymentMethod={paymentMethod} />
            </div>
        </Fragment>
    );
};
