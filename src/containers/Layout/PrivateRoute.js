import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { routesObject } from 'src/routes';
import { saveURI } from 'src/redux/actions/Auth.Action';

class PrivateRoute extends React.Component {
    constructor(props) {
        super(props);
    }
    componentWillMount() {
        this.props.onSaveURI(this.props.path);
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
    authenticated: PropTypes.bool.isRequired,
    path: PropTypes.string.isRequired,
    onSaveURI: PropTypes.func.isRequired
};


const mapStateToProps = () => {
    return { };
};

const mapDispatchToProps = dispatch => {
    return {
        dispatch,
        onSaveURI: (uri) => dispatch(saveURI(uri))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(PrivateRoute);
