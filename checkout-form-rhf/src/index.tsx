import React from 'react';
import ReactDOM from 'react-dom';
import * as yup from 'yup';
import { App } from './App';
import './i18n';
import { yupLocale } from './utils';

import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';

yup.setLocale(yupLocale);

ReactDOM.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>,
    document.getElementById('root')
);
