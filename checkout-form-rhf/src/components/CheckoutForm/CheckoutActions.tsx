import React from 'react';
import { NumberUtils } from '@react-force/number-utils';
import { Order } from '../../models';

export interface CheckoutActionsProps {
    order: Order;
}

export const CheckoutActions = ({ order }: CheckoutActionsProps) => {
    const orderTotal = Order.getOrderTotal(order).orderTotal;
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
