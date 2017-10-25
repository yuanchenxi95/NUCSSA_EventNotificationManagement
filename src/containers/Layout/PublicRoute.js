import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';

class PublicRoute extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        let {component: Component, authenticated, saved_uri, ...props} = this.props;
        let redirectPath = saved_uri;

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
    authenticated: PropTypes.bool.isRequired,
    saved_uri: PropTypes.string.isRequired
};


const mapStateToProps = ({authReducer}) => {
    return { saved_uri: authReducer.saved_uri };
};

const mapDispatchToProps = dispatch => {
    return {
        dispatch
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(PublicRoute);