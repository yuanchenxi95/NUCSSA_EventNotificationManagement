import {createStore, applyMiddleware, compose} from 'redux';
import thunk from 'redux-thunk';
import rootReducers from '../reducers/index';
import { verifyAuth } from '../actions/Auth.Action';
import { routerMiddleware } from 'react-router-redux';
import createHistory from 'history/createHashHistory';

export const history = createHistory();

export default () => {
    const store = createStore(
        rootReducers,
        {},
        compose(
            applyMiddleware(thunk, routerMiddleware(history)),
            window.devToolsExtension ? window.devToolsExtension() : f => f
        )
    );
    store.dispatch(verifyAuth());
    return store;
};