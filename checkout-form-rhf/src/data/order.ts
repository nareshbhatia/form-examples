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
    contactInfo: {
        email: 'emusk@teslamotors.com',
    },
    shippingAddress: {
        firstName: 'Elon',
        lastName: 'Musk',
        company: 'Tesla, Inc.',
        address: ' 3500 Deer Creek Road',
        city: 'Palo Alto',
        state: 'CA',
        zip: '94304',
    },
    shippingOptions: {
        shippingMethod: 'ground',
        giftWrapping: false,
    },
    paymentMethod: {
        type: 'creditCard',
        nameOnCard: '',
        cardNumber: '',
        expiration: '',
        cvv: 0,
    },
};
