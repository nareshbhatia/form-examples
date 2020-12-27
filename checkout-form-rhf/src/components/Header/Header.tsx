import React from 'react';
import { useTranslation } from 'react-i18next';
import styles from './Header.module.css';

export const Header = () => {
    const { t, i18n } = useTranslation();

    const handleLanguageChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        i18n.changeLanguage(e.target.value);
    };

    return (
        <nav className="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
            <span className="navbar-brand mb-0 h1 flex-fill">
                {t('text.checkout')}
            </span>
            <select
                className={`custom-select custom-select-sm ${styles.langSelect}`}
                onChange={handleLanguageChange}
            >
                <option value="en">English</option>
                <option value="es">Español</option>
            </select>
        </nav>
    );
};
