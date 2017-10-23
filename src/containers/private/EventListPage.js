import React from 'react';
import PropTypes from 'prop-types';
import { withRouter }  from 'react-router-dom';
import { connect } from 'react-redux';
import compose from 'recompose/compose';
import { ControlLabel, Form, FormGroup, FormControl, Button, Alert } from 'react-bootstrap';
import _ from 'lodash';

// import { signInUser } from 'src/redux/actions/Auth.Action';

class EventListPage extends React.Component {
    constructor() {
        super();
    }

    render() {
        console.log("Event List component");
        return(
            <div>
                <h1>Event List</h1>
            </div>
        );

    }
}

EventListPage.propTypes = {
    // onLogin: PropTypes.func.isRequired,
    // error: PropTypes.string.isRequired
};

// function mapStateToProps({ authLogin}) {
//     let {
//         error
//     } = authLogin;
//     return {
//         error
//     };
// }
//
// function mapDispatchToProps(dispatch) {
//     return {
//         onLogin: (email, password) => dispatch(signInUser({email, password})),
//     };
// }

const enhance = compose(
    // connect(mapStateToProps, mapDispatchToProps),
    withRouter
);

const EventListPageContainer = enhance(EventListPage);

export default EventListPageContainer;
