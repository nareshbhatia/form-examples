import React from 'react';
import { OrderDetail, OrderSummary } from '../../components';
import { useOrder, useOrderSetter } from '../../contexts';
import { Order, ShippingMethod } from '../../models';
import { CheckoutForm } from './CheckoutForm';

export const CheckoutPage = () => {
    const order = useOrder();
    const setOrder = useOrderSetter();

    /**
     * Note that `changedOrder` does not have orderItems,
     * so it must be merged with existing order.
     */
    const handleSubmit = (changedOrder: Order) => {
        console.log(JSON.stringify(changedOrder, null, 2));
        setOrder({
            ...order,
            ...changedOrder,
        });
    };

    const handleShippingMethodChanged = (shippingMethod: ShippingMethod) => {
        setOrder({
            ...order,
            shippingOptions: {
                ...order.shippingOptions,
                shippingMethod,
            },
        });
    };

    return (
        <div className="row">
            <div className="col-md-4 order-md-2 mb-4">
                <OrderSummary order={order} />
                <div className="mt-5">
                    <OrderDetail order={order} />
                </div>
            </div>
            <div className="col-md-8 order-md-1">
                <CheckoutForm
                    order={order}
                    onSubmit={handleSubmit}
                    onShippingMethodChanged={handleShippingMethodChanged}
                />
            </div>
        </div>
    );
};
