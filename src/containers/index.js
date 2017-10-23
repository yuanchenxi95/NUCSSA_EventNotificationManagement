/**
 * Created by ChenxiYuan on 7/22/17.
 */
import React, { Component } from 'react';
import { HashRouter } from 'react-router-dom';
import firebase from '../firebase';
import injectTapEventPlugin from 'react-tap-event-plugin';
import Layout from './Layout';
import { ConnectedRouter } from 'react-router-redux';
import { history } from 'src/redux/store/configureStore';

class IndexContainer extends Component {
    constructor(props) {
        super(props);
        injectTapEventPlugin();
    }
    componentWillMount() {
        // firebase.auth().onAuthStateChanged(
        //     (user) => {
        //         this.forceUpdate();
        //         // console.log("onAuthStateChanged: " + !!user);
        //     }
        // );


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
