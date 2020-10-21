import React, { Fragment } from 'react';
import { StringUtils } from '@react-force/utils';
import { Address } from '../../models';

const { isBlank } = StringUtils;

export interface AddressViewProps {
    label?: string;
    address: Address;
}

export const AddressView = ({ label, address }: AddressViewProps) => {
    const {
        firstName,
        lastName,
        company,
        address: addressLine,
        city,
        state,
        zip,
    } = address;
    return (
        <Fragment>
            {label !== undefined ? <h6 className="mb-0">{label}</h6> : null}
            <p>
                {firstName} {lastName}
                {!isBlank(company) ? (
                    <Fragment>
                        <br />
                        {company}
                    </Fragment>
                ) : null}
                <br />
                {addressLine}
                <br />
                {city}, {state} {zip}
            </p>
        </Fragment>
    );
};
