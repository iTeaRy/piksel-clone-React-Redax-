import thunkMiddleware from 'redux-thunk';
import { applyMiddleware, createStore } from 'redux';
import rootReducer from './reducers/index';

export const store = createStore(
    rootReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ &&
    window.__REDUX_DEVTOOLS_EXTENSION__(),
    applyMiddleware(thunkMiddleware)
);
