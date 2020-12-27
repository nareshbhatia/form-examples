import React, { Fragment } from 'react';
import { NumberUtils } from '@react-force/number-utils';
import { useTranslation } from 'react-i18next';
import { Order, OrderItem } from '../../models';

export interface OrderSummaryProps {
    order: Order;
}

export const OrderSummary = ({ order }: OrderSummaryProps) => {
    const { t } = useTranslation();
    const { orderItems } = order;
    const {
        orderItemsTotal,
        shippingCharges,
        orderTotal,
    } = Order.getOrderTotal(order);
    const orderItemsTotalStr = NumberUtils.formatAsMoney(orderItemsTotal);
    const shippingChargesStr = NumberUtils.formatAsMoney(shippingCharges);
    const orderTotalStr = NumberUtils.formatAsMoney(orderTotal);

    return (
        <Fragment>
            <h4 className="d-flex justify-content-between align-items-center mb-3">
                <span className="text-muted">{t('text.orderSummary')}</span>
                <span className="badge badge-secondary badge-pill">
                    {orderItems.length}
                </span>
            </h4>
            <ul className="list-group mb-3">
                {orderItems.map((orderItem) => (
                    <li
                        key={orderItem.item.id}
                        className="list-group-item d-flex justify-content-between lh-condensed"
                    >
                        <div>
                            <h6 className="my-0">{orderItem.item.name}</h6>
                            <small className="text-muted">
                                {t('text.quantity')}: {orderItem.qty}
                            </small>
                        </div>
                        <span className="text-muted">
                            $
                            {NumberUtils.formatAsMoney(
                                OrderItem.getTotal(orderItem)
                            )}
                        </span>
                    </li>
                ))}
                <li className="list-group-item">
                    <div className="d-flex justify-content-between">
                        <span>{t('text.items')}</span>
                        <strong>${orderItemsTotalStr}</strong>
                    </div>
                    <div className="d-flex justify-content-between">
                        <span>{t('text.shippingHandling')}</span>
                        <strong>${shippingChargesStr}</strong>
                    </div>
                </li>
                <li className="list-group-item d-flex justify-content-between text-primary">
                    <span>{t('text.orderTotal')}</span>
                    <strong>${orderTotalStr}</strong>
                </li>
            </ul>
        </Fragment>
    );
};
