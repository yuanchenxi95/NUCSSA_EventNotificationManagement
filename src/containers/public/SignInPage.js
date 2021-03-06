import React from 'react';
import PropTypes from 'prop-types';
import { withRouter }  from 'react-router-dom';
import { connect } from 'react-redux';
import compose from 'recompose/compose';
import { ControlLabel, Form, FormGroup, FormControl, Button, Alert } from 'react-bootstrap';
import _ from 'lodash';

import { signInUser } from 'src/redux/actions/Auth.Action';
import Error from 'src/components/Error';

class SignInPage extends React.Component {
    constructor() {
        super();
        this.state = {
            email: "",
            password: ""
        };
        this.renderError = this.renderError.bind(this);
        this.handleLogin = this.handleLogin.bind(this);
    }

    handleLogin(event) {
        if (!_.isUndefined(event)) {
            event.preventDefault();
        }
        this.props.onLogin(this.state.email, this.state.password);
        this.setState({
            password: ""
        });
    }

    renderError() {
        let { error } = this.props;
        if (!_.isNull(error)) {
            return (
                <div>
                    <Alert bsStyle="danger">
                        {error}
                    </Alert>
                </div>
            );
        }
    }

    render() {
        let { error } = this.props;
        return(
            <div>
                <h1>Sign In</h1>

                <Error error={error} />

                <Form>
                    <FormGroup
                        controlId="email"
                    >
                        <ControlLabel>Email</ControlLabel>
                        <FormControl
                            type="text"
                            value={this.state.email}
                            placeholder="Enter Email"
                            onChange={(e) => this.setState({email: e.target.value}) }
                        />
                    </FormGroup>
                    <FormGroup
                        controlId="password"
                    >
                        <ControlLabel>Password</ControlLabel>
                        <FormControl
                            type="password"
                            value={this.state.password}
                            placeholder="Enter Password"
                            onChange={(e) => this.setState({password: e.target.value}) }
                            onKeyPress={event => {
                                if (event.key === "Enter") {
                                    this.handleLogin();
                                }
                            }}
                        />
                    </FormGroup>
                </Form>
                <Button bsStyle="primary" onClick={this.handleLogin} block>Login</Button>
            </div>
        );

    }
}

SignInPage.propTypes = {
    onLogin: PropTypes.func.isRequired,
    error: PropTypes.string
};

const mapStateToProps = ({ authReducer }) => {
    let {
        error
    } = authReducer;
    return {
        error
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        onLogin: (email, password) => dispatch(signInUser({email, password})),
    };
};

const enhance = compose(
    connect(mapStateToProps, mapDispatchToProps),
    withRouter
);

const SignInPageContainer = enhance(SignInPage);

export default SignInPageContainer;
