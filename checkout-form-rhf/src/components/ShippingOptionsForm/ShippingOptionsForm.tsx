import React, { Fragment } from 'react';
import { Order, ShippingMethod } from '../../models';

export interface ShippingOptionsFormProps {
    order: Order;
    onShippingMethodChanged: (shippingMethod: ShippingMethod) => void;
}

export const ShippingOptionsForm = ({
    order,
    onShippingMethodChanged,
}: ShippingOptionsFormProps) => {
    const { shippingOptions } = order;
    const { shippingMethod, giftWrapping } = shippingOptions;

    const handleShippingMethodChanged = (
        event: React.ChangeEvent<HTMLInputElement>
    ) => {
        onShippingMethodChanged(event.target.value as ShippingMethod);
    };

    return (
        <Fragment>
            <h5 className="mb-3">Shipping Options</h5>
            <div className="d-block my-3">
                <div className="form-check form-check-inline">
                    <input
                        id="ground"
                        value="ground"
                        name="shippingMethod"
                        type="radio"
                        className="form-check-input"
                        defaultChecked={shippingMethod === 'ground'}
                        onChange={handleShippingMethodChanged}
                    />
                    <label className="form-check-label" htmlFor="ground">
                        Ground (3-5 days)
                    </label>
                </div>
                <div className="form-check form-check-inline">
                    <input
                        id="secondDay"
                        value="secondDay"
                        name="shippingMethod"
                        type="radio"
                        className="form-check-input"
                        defaultChecked={shippingMethod === 'secondDay'}
                        onChange={handleShippingMethodChanged}
                    />
                    <label className="form-check-label" htmlFor="second-day">
                        Second Day
                    </label>
                </div>
                <div className="form-check form-check-inline">
                    <input
                        id="overnight"
                        value="overnight"
                        name="shippingMethod"
                        type="radio"
                        className="form-check-input"
                        defaultChecked={shippingMethod === 'overnight'}
                        onChange={handleShippingMethodChanged}
                    />
                    <label className="form-check-label" htmlFor="overnight">
                        Overnight
                    </label>
                </div>
            </div>
            <div className="form-check form-check-inline">
                <input
                    className="form-check-input"
                    type="checkbox"
                    id="gift-wrapping"
                    value="gift-wrapping"
                    defaultChecked={giftWrapping}
                />
                <label className="form-check-label" htmlFor="gift-wrapping">
                    Gift wrapping
                </label>
            </div>
        </Fragment>
    );
};
