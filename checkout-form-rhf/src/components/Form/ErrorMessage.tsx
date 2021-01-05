import React from 'react';
import { useTranslation } from 'react-i18next';
import { ValidationError } from '../../models';

export interface ErrorMessageProps {
    error?: ValidationError | string;
}

export const ErrorMessage = ({ error }: ErrorMessageProps) => {
    const { t } = useTranslation();

    if (error === undefined) {
        return null;
    } else if (typeof error === 'string') {
        return <div className="error-text">{error}</div>;
    } else {
        const { key, values } = error;
        return <div className="error-text">{t(key, values)}</div>;
    }
};
