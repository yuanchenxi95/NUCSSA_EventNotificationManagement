import React from 'react';
import PropTypes from 'prop-types';
import { withRouter }  from 'react-router-dom';
import { connect } from 'react-redux';
import compose from 'recompose/compose';
import { Button } from 'react-bootstrap';
import { push } from 'react-router-redux';
import { BootstrapTable, TableHeaderColumn }from 'react-bootstrap-table';

import { loadEventList, unloadEventList } from 'src/redux/actions/Event/LoadEventList.Action';
import { deleteEvent } from 'src/redux/actions/Event/DeleteEvent.Action';
import { routesObject } from "src/routes";
import Error from 'src/components/Error';
import { handleConfirmDeleteRow } from 'src/utils';

class EventListPage extends React.Component {
    constructor() {
        super();
        this.redirectToCreateEvent = this.redirectToCreateEvent.bind(this);
        this.handleDeleteEvent = this.handleDeleteEvent.bind(this);
    }

    componentWillMount() {
        this.props.onLoadEventList();
    }

    componentWillUnmount() {
        this.props.onUnloadEventList();
    }

    redirectToCreateEvent() {
        this.props.dispatch(push(routesObject.private.createEvent.path));
    }

    handleDeleteEvent(eventId) {
        this.props.onDeleteEvent(eventId);
    }

    render() {
        let { eventList, error, isLoading } = this.props;
        if (isLoading) {
            return (
                <div>
                    <h1>Loading</h1>
                    <Error error={error} />
                </div>
            );
        }
        let options = {
            onDeleteRow: (eventId) => this.handleDeleteEvent(eventId),
            handleConfirmDeleteRow: handleConfirmDeleteRow
        };
        return(
            <div>
                <h1>Event List</h1>
                <Error error={error} />
                <Button bsStyle="primary" onClick={this.redirectToCreateEvent} block>Create Event</Button>
                <br/>
                <BootstrapTable data={ eventList } remote deleteRow selectRow={{ mode: 'radio' }} options={ options } >
                    <TableHeaderColumn dataField='id' isKey>Event Id</TableHeaderColumn>
                    <TableHeaderColumn dataField='Name'>Event Name</TableHeaderColumn>
                    <TableHeaderColumn dataField='Location' >Event Location</TableHeaderColumn>
                    <TableHeaderColumn dataField='Time'>Event Time</TableHeaderColumn>
                </BootstrapTable>
            </div>
        );

    }
}

EventListPage.propTypes = {
    error: PropTypes.string.isRequired,
    isLoading: PropTypes.bool.isRequired,
    eventList: PropTypes.array.isRequired,
    onLoadEventList: PropTypes.func.isRequired,
    onUnloadEventList: PropTypes.func.isRequired,
    onDeleteEvent: PropTypes.func.isRequired,
    dispatch: PropTypes.func.isRequired
};

function mapStateToProps({ eventReducer}) {
    let {
        error,
        isLoading,
        eventList
    } = eventReducer.loadEventListReducer;

    eventList = eventList.toArray();

    return {
        error,
        isLoading,
        eventList
    };
}

function mapDispatchToProps(dispatch) {
    return {
        dispatch,
        onLoadEventList: () => dispatch(loadEventList()),
        onUnloadEventList: () => dispatch(unloadEventList()),
        onDeleteEvent: (eventID) => dispatch(deleteEvent(eventID))
    };
}

const enhance = compose(
    connect(mapStateToProps, mapDispatchToProps),
    withRouter
);

const EventListPageContainer = enhance(EventListPage);

export default EventListPageContainer;
