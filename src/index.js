import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import configureStore from './redux/store/configureStore';
import IndexContainer from './containers';

const store = configureStore();

ReactDOM.render(
    <Provider store={store}>
        <IndexContainer/>
    </Provider>
    , document.querySelector('.container'));