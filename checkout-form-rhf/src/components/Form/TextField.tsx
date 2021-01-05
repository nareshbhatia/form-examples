import React, { Fragment } from 'react';
import { ValidationError } from '../../models';
import { ErrorMessage } from './ErrorMessage';

interface InputInjectedProps {
    id?: string;
    name?: string;
    type?: string;
    ref?: React.Ref<any>;
    className: string;
    onBlur?: (e: React.FocusEvent<HTMLInputElement>) => void;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export interface TextFieldProps {
    /** used to make label and errorText accessible for screen readers */
    id?: string;

    /** passed directly to the input element */
    name?: string;

    /** the label content */
    label?: React.ReactNode;

    /** passed directly to the input element */
    ref?: React.Ref<any>;

    /** error text */
    error?: ValidationError | string;

    renderContainer?: (props: InputInjectedProps) => JSX.Element;

    onBlur?: (e: React.FocusEvent<HTMLInputElement>) => void;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

/**
 * Uses the "Render Prop" pattern to pass through arbitrary props that it
 * doesn't understand.
 * See https://blog.andrewbran.ch/polymorphic-react-components/
 */
export const TextField = React.forwardRef(
    (
        {
            id,
            name,
            label,
            error,
            renderContainer = (props) => <input {...props} />,
            onBlur,
            onChange,
        }: TextFieldProps,
        ref
    ) => {
        return (
            <Fragment>
                {label !== undefined ? (
                    <label htmlFor={id}>{label}</label>
                ) : null}
                {renderContainer({
                    id,
                    name,
                    type: 'text',
                    ref,
                    className: 'form-control form-control-sm',
                    onBlur,
                    onChange,
                })}
                <ErrorMessage error={error} />
            </Fragment>
        );
    }
);
