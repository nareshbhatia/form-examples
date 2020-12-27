import React, { Fragment } from 'react';
import { useTranslation } from 'react-i18next';
import { ShippingMethod } from '../../models';

export interface ShippingMethodTextProps {
    shippingMethod: ShippingMethod;
}

export const ShippingMethodText = ({
    shippingMethod,
}: ShippingMethodTextProps) => {
    const { t } = useTranslation();

    const ShippingMethodNames: { [key in ShippingMethod]: string } = {
        ground: t('text.ground'),
        secondDay: t('text.secondDay'),
        overnight: t('text.overnight'),
    };

    return <Fragment>{ShippingMethodNames[shippingMethod]}</Fragment>;
};
