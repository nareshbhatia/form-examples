export interface Address {
    firstName: string;
    lastName: string;
    company?: string;
    address: string;
    city: string;
    state: string;
    zip: string;
}

export const newAddress = (): Address => ({
    firstName: '',
    lastName: '',
    company: '',
    address: '',
    city: '',
    state: '',
    zip: '',
});
