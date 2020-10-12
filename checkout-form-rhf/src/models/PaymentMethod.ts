export type PaymentType = 'creditCard' | 'bankAccount';

export const PaymentTypeNames: { [key in PaymentType]: string } = {
    creditCard: 'Credit Card',
    bankAccount: 'Bank Account',
};

export interface CreditCardPayment {
    type: 'creditCard';
    nameOnCard: string;
    cardNumber: string;
    expiration: string;
    cvv: number;
}

export interface BankAccountPayment {
    type: 'bankAccount';
    accountHolderName: string;
    bankName: string;
    routingNumber: string;
    accountNumber: string;
}

/** TypeScript discriminating union */
export type PaymentMethod = CreditCardPayment | BankAccountPayment;
