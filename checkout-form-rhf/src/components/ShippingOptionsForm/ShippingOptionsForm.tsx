import React, { Fragment } from 'react';
import { useFormContext } from 'react-hook-form';
import * as yup from 'yup';
import { ShippingMethod } from '../../models';
import { Checkbox, Radio } from '../Form';

export const shippingOptionsSchema = yup.object().shape({
    shippingMethod: yup
        .string()
        .required('Shipping method is a required field'),
    giftWrapping: yup.boolean().required('Gift wrapping is a required field'),
});

export interface ShippingOptionsFormProps {
    onShippingMethodChanged: (shippingMethod: ShippingMethod) => void;
}

export const ShippingOptionsForm = ({
    onShippingMethodChanged,
}: ShippingOptionsFormProps) => {
    const { errors, register } = useFormContext();

    const handleShippingMethodChanged = (
        event: React.ChangeEvent<HTMLInputElement>
    ) => {
        onShippingMethodChanged(event.target.value as ShippingMethod);
    };

    return (
        <Fragment>
            <h5 className="mb-3">Shipping Options</h5>
            <div className="d-block my-3">
                <Radio
                    id="ground"
                    value="ground"
                    name="shippingOptions.shippingMethod"
                    label="Ground (3-5 days)"
                    ref={register}
                    error={errors.shippingOptions?.shippingMethod?.message}
                    onChange={handleShippingMethodChanged}
                />
                <Radio
                    id="secondDay"
                    value="secondDay"
                    name="shippingOptions.shippingMethod"
                    label="Second Day"
                    ref={register}
                    error={errors.shippingOptions?.shippingMethod?.message}
                    onChange={handleShippingMethodChanged}
                />
                <Radio
                    id="overnight"
                    value="overnight"
                    name="shippingOptions.shippingMethod"
                    label="Overnight"
                    ref={register}
                    error={errors.shippingOptions?.shippingMethod?.message}
                    onChange={handleShippingMethodChanged}
                />
            </div>
            <Checkbox
                id="giftWrapping"
                name="shippingOptions.giftWrapping"
                label="Gift wrapping"
                ref={register}
                error={errors.shippingOptions?.giftWrapping?.message}
            />
        </Fragment>
    );
};
