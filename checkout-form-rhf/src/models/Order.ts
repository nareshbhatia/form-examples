import { Address } from './Address';
import { ContactInfo } from './ContactInfo';
import { OrderItem } from './OrderItem';
import { BankAccount, CreditCard, PaymentMethod } from './PaymentMethod';
import { ShippingOptions, ShippingRates } from './ShippingOptions';

export interface Order {
    orderItems: Array<OrderItem>;
    contactInfo: ContactInfo;
    shippingAddress?: Address;
    shippingOptions: ShippingOptions;
    paymentMethod: PaymentMethod;
    creditCard?: CreditCard;
    bankAccount?: BankAccount;
}

export const Order = {
    getOrderItemsTotal: (order: Order) => {
        return order.orderItems.reduce((total, orderItem) => {
            return total + OrderItem.getTotal(orderItem);
        }, 0);
    },

    getShippingCharges: (order: Order) => {
        return ShippingRates[order.shippingOptions.shippingMethod];
    },

    getOrderTotal: (order: Order) => {
        const orderItemsTotal = Order.getOrderItemsTotal(order);
        const shippingCharges = Order.getShippingCharges(order);
        return {
            orderItemsTotal,
            shippingCharges,
            orderTotal: orderItemsTotal + shippingCharges,
        };
    },
};
