export interface CreditCard {
    nameOnCard: string;
    cardNumber: string;
    expiration: string;
    CVV: number;
}

export interface BankAccount {
    nameOnCard: string;
    cardNumber: string;
    expiration: string;
    CVV: number;
}

export type PaymentMethod = 'creditCard' | 'bankAccount';

export const PaymentMethodNames: { [key in PaymentMethod]: string } = {
    creditCard: 'Credit Card',
    bankAccount: 'Bank Account',
};
