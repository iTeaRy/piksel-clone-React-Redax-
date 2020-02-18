import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom'

import { FormattedMessage } from 'react-intl';

import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Home from '@material-ui/icons/Home';
import Info from '@material-ui/icons/Info';


import {
    mainPath,
    PixelClonePath,
} from '../../utils/BuildPaths';

const styles = {
    root: {
        flexGrow: 1,
    },
    grow: {
        flexGrow: 1,
    },
    menuButton: {
        marginLeft: -12,
        marginRight: 20,
    },
};

class Header extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isSidebar: false,
        };
    }

    toggleDrawer = () => {
        this.setState(prevState => ({
            isSidebar: !prevState.isSidebar
        }));
    };

    render() {
        const { root, menuButton } = this.props.classes;
        const { isSidebar } = this.state;
        const menu = [
            {
                id: 'home',
                path: mainPath(),
                title: <FormattedMessage id={'menu.home'} />,
                icon: <Home />,
            },
            {
                id: 'aboutUs',
                path: PixelClonePath(),
                title: <FormattedMessage id={'Pixel Clone'} />,
                icon: <Info />,
            }
        ];
        return (
            <div className={root}>
                <Drawer open={isSidebar} onClose={this.toggleDrawer}>
                    <div
                        tabIndex={0}
                        role="button"
                        onClick={this.toggleDrawer}
                        onKeyDown={this.toggleDrawer}
                    >
                        <List>
                            {menu.map(item => (
                                <Link to={item.path} key={item.id}>
                                    <ListItem button>
                                        <ListItemIcon>{item.icon}</ListItemIcon>
                                        <ListItemText primary={item.title} />
                                    </ListItem>
                                </Link>
                            ))}
                        </List>
                    </div>
                </Drawer>
                <AppBar position="static">
                    <Toolbar>
                        <IconButton className={menuButton} color="inherit" aria-label="Menu" onClick={this.toggleDrawer}>
                            <MenuIcon />
                        </IconButton>
                    </Toolbar>
                </AppBar>
            </div>
        );
    }
}

Header.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Header);
