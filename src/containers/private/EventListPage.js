import React from 'react';
import PropTypes from 'prop-types';
import { withRouter }  from 'react-router-dom';
import { connect } from 'react-redux';
import compose from 'recompose/compose';
import { Button, Alert } from 'react-bootstrap';
import { push } from 'react-router-redux';
import { BootstrapTable, TableHeaderColumn }from 'react-bootstrap-table';

import _ from 'lodash';

import { loadEvents } from 'src/redux/actions/Events.Action';
import { routesObject } from "src/routes";

class EventListPage extends React.Component {
    constructor() {
        super();
        this.redirectToCreateEvent = this.redirectToCreateEvent.bind(this);
        this.renderError = this.renderError.bind(this);
    }

    componentWillMount() {
        this.props.loadEvents();
    }

    redirectToCreateEvent() {
        this.props.dispatch(push(routesObject.private.createEvent.path));
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
        let { events, error, isSuccess } = this.props;

        if (error) {
            return this.renderError();
        }

        if (!isSuccess) {
            return (
                <div>
                    <h1>Loading</h1>
                </div>
            );
        }
        let options = {
            onRowClick: function(row){
                console.log(row);
            }
        };
        return(
            <div>
                <h1>Event List</h1>
                <Button bsStyle="primary" onClick={this.redirectToCreateEvent} block>Create Event</Button>
                <br/>
                <BootstrapTable data={ events } options={ options }>
                    <TableHeaderColumn dataField='id' isKey hidden>Event Id</TableHeaderColumn>
                    <TableHeaderColumn dataField='Name'>Event Name</TableHeaderColumn>
                    <TableHeaderColumn dataField='Location' >Event Location</TableHeaderColumn>
                    <TableHeaderColumn dataField='Time'>Event Time</TableHeaderColumn>
                </BootstrapTable>
            </div>
        );

    }
}

EventListPage.propTypes = {
    // onLogin: PropTypes.func.isRequired,
    error: PropTypes.string.isRequired,
    isSuccess: PropTypes.bool.isRequired,
    events: PropTypes.array.isRequired,
    loadEvents: PropTypes.func.isRequired,
    dispatch: PropTypes.func.isRequired
};

function mapStateToProps({ eventsReducer}) {
    let {
        error,
        isSuccess,
        events
    } = eventsReducer;

    events = events.toArray();

    return {
        error,
        isSuccess,
        events
    };
}

function mapDispatchToProps(dispatch) {
    return {
        dispatch,
        loadEvents: () => dispatch(loadEvents())
    };
}

const enhance = compose(
    connect(mapStateToProps, mapDispatchToProps),
    withRouter
);

const EventListPageContainer = enhance(EventListPage);

export default EventListPageContainer;
