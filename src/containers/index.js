/**
 * Created by ChenxiYuan on 7/22/17.
 */
import React, { Component } from 'react';
import injectTapEventPlugin from 'react-tap-event-plugin';
import Layout from './Layout';
import { ConnectedRouter } from 'react-router-redux';
import { history } from 'src/redux/store/configureStore';

import 'bootstrap/dist/js/bootstrap.min';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-bootstrap-table/dist/react-bootstrap-table.min.css';
import "./index.css";

class IndexContainer extends Component {
    constructor(props) {
        super(props);
        injectTapEventPlugin();
    }

    render() {
        return (
            <ConnectedRouter history={history}>
                <Layout/>
            </ConnectedRouter>
        );

    }
}


export default IndexContainer;
