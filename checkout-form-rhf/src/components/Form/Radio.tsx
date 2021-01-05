import React from 'react';
import { ValidationError } from '../../models';
import { ErrorMessage } from './ErrorMessage';

interface InputInjectedProps {
    id?: string;
    value?: string;
    name?: string;
    type?: string;
    ref?: React.Ref<any>;
    className: string;
    onBlur?: (e: React.FocusEvent<HTMLInputElement>) => void;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export interface RadioProps {
    /** used to make label and errorText accessible for screen readers */
    id?: string;

    /** used to make label and errorText accessible for screen readers */
    value?: string;

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
export const Radio = React.forwardRef(
    (
        {
            id,
            value,
            name,
            label,
            error,
            renderContainer = (props) => <input {...props} />,
            onBlur,
            onChange,
        }: RadioProps,
        ref
    ) => {
        return (
            <div className="form-check form-check-inline">
                {renderContainer({
                    id,
                    value,
                    name,
                    type: 'radio',
                    ref,
                    className: 'form-check-input',
                    onBlur,
                    onChange,
                })}
                {label !== undefined ? (
                    <label className="form-check-label" htmlFor={id}>
                        {label}
                    </label>
                ) : null}
                <ErrorMessage error={error} />
            </div>
        );
    }
);
