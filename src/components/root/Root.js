import React from 'react';
import { Route, Switch, withRouter } from 'react-router-dom';
import './Root.css';
import Home from '../pages/Home';
import PixelClone from '../pages/PixelClone';
import Application from './Application';
import { PixelClonePath, mainPath } from '../../utils/BuildPaths';
import { FormattedMessage } from 'react-intl';
const Root = () => (
    <Application>
        <Switch>
            <Route
                path={PixelClonePath()}
                name={<FormattedMessage id={'menu.PixelClone'} />}
                component={PixelClone}
            />
            <Route
                exact
                path={mainPath()}
                name={<FormattedMessage id={'menu.home'} />}
                component={Home}
            />
            <Route name={'Default Page'} component={Home} />
        </Switch>
    </Application>
);

export default withRouter(Root);
