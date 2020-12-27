import React from 'react';
import { NumberUtils } from '@react-force/number-utils';
import { useTranslation } from 'react-i18next';

export interface CheckoutActionsProps {
    orderTotal: number;
}

export const CheckoutActions = ({ orderTotal }: CheckoutActionsProps) => {
    const { t } = useTranslation();
    const orderTotalStr = NumberUtils.formatAsMoney(orderTotal);

    return (
        <div className="d-flex align-items-center border p-2 mt-2 mb-5">
            <button className="btn btn-primary" type="submit">
                {t('text.placeYourOrder')}
            </button>
            <strong className="ml-3 text-primary">
                {t('text.orderTotal')}: ${orderTotalStr}
            </strong>
        </div>
    );
};
