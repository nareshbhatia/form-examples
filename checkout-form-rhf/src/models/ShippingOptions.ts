export type ShippingMethod = 'ground' | 'secondDay' | 'overnight';

export const ShippingMethodNames: { [key in ShippingMethod]: string } = {
    ground: 'Ground',
    secondDay: 'Second Day',
    overnight: 'Overnight',
};

export const ShippingRates: { [key in ShippingMethod]: number } = {
    ground: 20.0,
    secondDay: 40.0,
    overnight: 60.0,
};

export interface ShippingOptions {
    shippingMethod: ShippingMethod;
    giftWrapping: boolean;
}
