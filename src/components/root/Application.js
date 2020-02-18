import React from 'react';
import Header from './Header';

const Application = props => (
    <React.Fragment>
        <Header />
        {props.children}
    </React.Fragment>
);

export default Application;