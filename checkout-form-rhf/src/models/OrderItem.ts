import { Item } from './Item';

export interface OrderItem {
    item: Item;
    qty: number;
}

export const OrderItem = {
    getTotal: (orderItem: OrderItem) => orderItem.item.price * orderItem.qty,
};
