import React, { useContext, useState } from 'react';
import { order as initialOrder } from '../data';
import { Order } from '../models';

// ---------- OrderContext ----------
type OrderSetter = (order: Order) => void;

const OrderContext = React.createContext<Order | undefined>(undefined);
const OrderSetterContext = React.createContext<OrderSetter | undefined>(
    undefined
);

// ---------- Hooks ----------
function useOrder(): Order {
    const order = useContext(OrderContext);
    if (order === undefined) {
        /* istanbul ignore next */
        throw new Error('useOrder must be used within a OrderContextProvider');
    }
    return order;
}

function useOrderSetter(): OrderSetter {
    const setOrder = useContext(OrderSetterContext);
    if (setOrder === undefined) {
        /* istanbul ignore next */
        throw new Error(
            'useOrderSetter must be used within a OrderContextProvider'
        );
    }
    return setOrder;
}

// ---------- OrderContextProvider ----------
const OrderContextProvider: React.FC = ({ children }) => {
    const [order, setOrder] = useState<Order>(initialOrder);

    return (
        <OrderContext.Provider value={order}>
            <OrderSetterContext.Provider value={setOrder}>
                {children}
            </OrderSetterContext.Provider>
        </OrderContext.Provider>
    );
};

export { OrderContextProvider, useOrder, useOrderSetter };
