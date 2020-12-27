import React, { Fragment } from 'react';
import { useFormContext } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
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
    const { t } = useTranslation();
    const { errors, register } = useFormContext();

    const handleShippingMethodChanged = (
        event: React.ChangeEvent<HTMLInputElement>
    ) => {
        onShippingMethodChanged(event.target.value as ShippingMethod);
    };

    return (
        <Fragment>
            <h5 className="mb-3">{t('text.shippingOptions')}</h5>
            <div className="d-block my-3">
                <Radio
                    id="ground"
                    value="ground"
                    name="shippingOptions.shippingMethod"
                    label={t('text.groundLong')}
                    ref={register}
                    error={errors.shippingOptions?.shippingMethod?.message}
                    onChange={handleShippingMethodChanged}
                />
                <Radio
                    id="secondDay"
                    value="secondDay"
                    name="shippingOptions.shippingMethod"
                    label={t('text.secondDay')}
                    ref={register}
                    error={errors.shippingOptions?.shippingMethod?.message}
                    onChange={handleShippingMethodChanged}
                />
                <Radio
                    id="overnight"
                    value="overnight"
                    name="shippingOptions.shippingMethod"
                    label={t('text.overnight')}
                    ref={register}
                    error={errors.shippingOptions?.shippingMethod?.message}
                    onChange={handleShippingMethodChanged}
                />
            </div>
            <Checkbox
                id="giftWrapping"
                name="shippingOptions.giftWrapping"
                label={t('text.giftWrapping')}
                ref={register}
                error={errors.shippingOptions?.giftWrapping?.message}
            />
        </Fragment>
    );
};
