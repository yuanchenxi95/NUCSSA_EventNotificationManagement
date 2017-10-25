import React from 'react';
import { Route, Switch, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { generatePrivateRouteList, generatePublicRouteList} from './utils';
import { routesObject, publicRoutesList, privateRoutesList } from 'src/routes/index';

const fallBack = routesObject.fallBack;

const Layout = (props) => {
    return (
        <div>
            <div className="container">
                <Switch>
                    {generatePublicRouteList(publicRoutesList, props.authenticated)}
                    {generatePrivateRouteList(privateRoutesList, props.authenticated)}
                    <Route key={fallBack.name} path={fallBack.path} component={fallBack.component}/>
                </Switch>
            </div>
        </div>
    );
};

Layout.propTypes = {
    authenticated: PropTypes.bool.isRequired
};

const mapStateToProps = ({authReducer}) => {
    return { authenticated: authReducer.authenticated };
};

export default withRouter(connect(mapStateToProps)(Layout));