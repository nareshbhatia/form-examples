import React, { Suspense } from 'react';
import { Header, Loading } from './components';
import { OrderContextProvider } from './contexts';
import { CheckoutPage } from './pages';

export const App = () => {
    return (
        <Suspense fallback={<Loading />}>
            <OrderContextProvider>
                <Header />
                <main role="main" className="container">
                    <CheckoutPage />
                </main>
            </OrderContextProvider>
        </Suspense>
    );
};
