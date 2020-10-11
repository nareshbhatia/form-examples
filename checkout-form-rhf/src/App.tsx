import React from 'react';
import { Header } from './components';
import { OrderContextProvider } from './contexts';
import { CheckoutPage } from './pages';

export const App = () => {
    return (
        <OrderContextProvider>
            <Header />
            <main role="main" className="container">
                <CheckoutPage />
            </main>
        </OrderContextProvider>
    );
};
