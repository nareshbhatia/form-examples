import React, { Fragment, useState } from 'react';

interface InputInjectedProps {
    id?: string;
    name?: string;
    type?: string;
    ref?: React.Ref<any>;
    className: string;
    onBlur?: (e: React.FocusEvent<HTMLInputElement>) => void;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export interface LimitedTextFieldProps {
    /** used to make label and errorText accessible for screen readers */
    id?: string;

    /** passed directly to the input element */
    name?: string;

    /** the label content */
    label?: React.ReactNode;

    /** maximum count of characters allowed in text field */
    maxCount: number;

    /** passed directly to the input element */
    ref?: React.Ref<any>;

    /** error text */
    error?: string;

    renderContainer?: (props: InputInjectedProps) => JSX.Element;

    onBlur?: (e: React.FocusEvent<HTMLInputElement>) => void;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

/**
 * Uses the "Render Prop" pattern to pass through arbitrary props that it
 * doesn't understand.
 * See https://blog.andrewbran.ch/polymorphic-react-components/
 */
export const LimitedTextField = React.forwardRef(
    (
        {
            id,
            name,
            label,
            maxCount,
            error,
            renderContainer = (props) => <input {...props} />,
            onBlur,
            onChange,
        }: LimitedTextFieldProps,
        ref
    ) => {
        const [value, setValue] = useState('');
        const remainingCount = maxCount - value.length;

        const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
            setValue(e.currentTarget.value);
            if (onChange !== undefined) onChange(e);
        };

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
                    onChange: handleChange,
                })}
                <div className={remainingCount < 0 ? 'text-danger' : ''}>
                    {remainingCount} characters
                </div>
                {error !== undefined ? (
                    <div className="error-text">{error}</div>
                ) : null}
            </Fragment>
        );
    }
);
