export type ShippingMethod = 'ground' | 'secondDay' | 'overnight';

export interface ShippingOptions {
    shippingMethod: ShippingMethod;
    giftWrapping: boolean;
}
