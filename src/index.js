import 'babel-polyfill';
import 'whatwg-fetch';
import 'intl';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { IntlProvider } from 'react-intl';
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles';
import locale from './i18n/';
import './styles/';
import { store } from './store';
import AuthHoc from './auth/AuthHoc';

const theme = createMuiTheme({
    typography: {
        useNextVariants: true,
        fontFamily: ['Open Sans', 'Helvetica', 'Arial', 'sans-serif'].join(','),
    },
    spacing: 3,
});

ReactDOM.render(
    <MuiThemeProvider theme={theme}>
        <Provider store={store} key="provider">
            <IntlProvider
                locale={locale.currentLocale}
                messages={locale.localeWording}
            >
                <AuthHoc />
            </IntlProvider>
        </Provider>
    </MuiThemeProvider>,
    document.getElementById('root')
);

// enable debugging
if (process.env.NODE_ENV !== 'production') {
    window.React = React;
}
