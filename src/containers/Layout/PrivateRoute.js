import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import { routesObject } from 'src/routes';

class PrivateRoute extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        let {component: Component, authenticated, ...props} = this.props;
        let redirectPath = routesObject.public.signIn.path;
        return (
            <Route
                exact
                {...props}
                render={(props) => authenticated === true
                    ? <Component {...props} />
                    : <Redirect to={{pathname: redirectPath, state: {from: props.location}}} />}
            />
        );
    }
}

PrivateRoute.propTypes = {
    component: PropTypes.func.isRequired,
    authenticated: PropTypes.bool.isRequired
};

export default PrivateRoute;