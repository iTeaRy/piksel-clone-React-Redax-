import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import tools from './tools';
import frames from './frames';

export default combineReducers({
    routing: routerReducer,
    tools,
    frames,
});
