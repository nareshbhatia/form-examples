import React from 'react';
import { CheckoutForm, OrderSummary } from '../../components';
import { useOrder, useOrderSetter } from '../../contexts';
import { Order, ShippingMethod } from '../../models';

export const CheckoutPage = () => {
    const order = useOrder();
    const setOrder = useOrderSetter();

    const handleSubmit = (order: Order) => {
        console.log(order);
        setOrder(order);
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
