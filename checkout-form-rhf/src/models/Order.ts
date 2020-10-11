import { ContactInfo } from './ContactInfo';
import { OrderItem } from './OrderItem';
import { ShippingOptions } from './ShippingOptions';

export interface Order {
    orderItems: Array<OrderItem>;
    shippingCharges: number;
    contactInfo: ContactInfo;
    shippingOptions: ShippingOptions;
}

export const Order = {
    getOrderItemsTotal: (order: Order) => {
        return order.orderItems.reduce((total, orderItem) => {
            return total + OrderItem.getTotal(orderItem);
        }, 0);
    },

    getOrderTotal: (order: Order) => {
        const orderItemsTotal = Order.getOrderItemsTotal(order);
        const { shippingCharges } = order;
        return {
            orderItemsTotal,
            shippingCharges,
            orderTotal: orderItemsTotal + shippingCharges,
        };
    },
};
