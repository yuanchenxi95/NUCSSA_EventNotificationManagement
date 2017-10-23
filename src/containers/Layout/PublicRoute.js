import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import { routesObject } from 'src/routes';

class PublicRoute extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        let {component: Component, authenticated, ...props} = this.props;
        let redirectPath = routesObject.private.event.path;

        return (
            <Route
                exact
                {...props}
                render={(props) => authenticated === false
                    ? <Component {...props} />
                    : <Redirect to={{pathname: redirectPath, state: {from: props.location}}} />}
            />
        );
    }
}

PublicRoute.propTypes = {
    component: PropTypes.func.isRequired,
    authenticated: PropTypes.bool.isRequired
};

export default PublicRoute;
