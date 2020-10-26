import { Item } from './Item';

export interface OrderItem {
    item: Item;
    qty: number;
}

/* eslint-disable @typescript-eslint/no-redeclare */
export const OrderItem = {
    getTotal: (orderItem: OrderItem) => orderItem.item.price * orderItem.qty,
};
