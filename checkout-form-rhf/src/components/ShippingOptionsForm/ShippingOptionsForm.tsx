import React, { Fragment } from 'react';
import { useFormContext } from 'react-hook-form';
import { ShippingMethod } from '../../models';

export interface ShippingOptionsFormProps {
    onShippingMethodChanged: (shippingMethod: ShippingMethod) => void;
}

export const ShippingOptionsForm = ({
    onShippingMethodChanged,
}: ShippingOptionsFormProps) => {
    const { register } = useFormContext();

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
                        name="shippingOptions.shippingMethod"
                        type="radio"
                        className="form-check-input"
                        ref={register}
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
                        name="shippingOptions.shippingMethod"
                        type="radio"
                        className="form-check-input"
                        ref={register}
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
                        name="shippingOptions.shippingMethod"
                        type="radio"
                        className="form-check-input"
                        ref={register}
                        onChange={handleShippingMethodChanged}
                    />
                    <label className="form-check-label" htmlFor="overnight">
                        Overnight
                    </label>
                </div>
            </div>
            <div className="form-check form-check-inline">
                <input
                    id="giftWrapping"
                    value="giftWrapping"
                    name="shippingOptions.giftWrapping"
                    type="checkbox"
                    className="form-check-input"
                    ref={register}
                />
                <label className="form-check-label" htmlFor="giftWrapping">
                    Gift wrapping
                </label>
            </div>
        </Fragment>
    );
};
