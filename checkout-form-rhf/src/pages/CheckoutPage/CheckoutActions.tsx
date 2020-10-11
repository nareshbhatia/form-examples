import React from 'react';
import { NumberUtils } from '@react-force/number-utils';

export interface CheckoutActionsProps {
    orderTotal: number;
}

export const CheckoutActions = ({ orderTotal }: CheckoutActionsProps) => {
    const orderTotalStr = NumberUtils.formatAsMoney(orderTotal);

    return (
        <div className="d-flex align-items-center border p-2 mt-2 mb-5">
            <button className="btn btn-primary" type="submit">
                Place your order
            </button>
            <strong className="ml-3 text-primary">
                Order total: ${orderTotalStr}
            </strong>
        </div>
    );
};
