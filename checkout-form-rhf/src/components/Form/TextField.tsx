import React, { Fragment } from 'react';

interface InputInjectedProps {
    id?: string;
    name?: string;
    type?: string;
    ref?: React.Ref<any>;
    className: string;
}

export interface TextFieldProps {
    /** used to make label and errorText accessible for screen readers */
    id?: string;

    /** passed directly to the input element */
    name?: string;

    /** the label content */
    label?: React.ReactNode;

    /** passed directly to the input element */
    type?: string;

    /** passed directly to the input element */
    ref?: React.Ref<any>;

    /** error text */
    error?: string;

    renderContainer?: (props: InputInjectedProps) => JSX.Element;
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
            type,
            error,
            renderContainer = (props) => <input {...props} />,
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
                    type,
                    ref,
                    className: 'form-control form-control-sm',
                })}
                {error !== undefined ? (
                    <div className="error-text">{error}</div>
                ) : null}
            </Fragment>
        );
    }
);
