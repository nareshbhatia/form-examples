import { Order } from '../models';

export const order: Order = {
    orderItems: [
        {
            item: {
                id: 'E01',
                name: 'Apple MacBook Pro',
                price: 699.0,
            },
            qty: 1,
        },
        {
            item: {
                id: 'E08',
                name: 'Nest Learning Thermostat',
                price: 249.0,
            },
            qty: 1,
        },
        {
            item: {
                id: 'M08',
                name: 'Pharrell Williams - Happy',
                price: 12.0,
            },
            qty: 1,
        },
    ],
    shippingCharges: 20.0,
    contactInfo: {
        email: 'michael.jackson@gmail.com',
    },
    shippingOptions: {
        shippingMethod: 'ground',
        giftWrapping: false,
    },
};
