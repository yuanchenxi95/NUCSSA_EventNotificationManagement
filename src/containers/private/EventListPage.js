import React from 'react';
import PropTypes from 'prop-types';
import { withRouter }  from 'react-router-dom';
import { connect } from 'react-redux';
import compose from 'recompose/compose';
import { Button } from 'react-bootstrap';
import { push } from 'react-router-redux';
import { BootstrapTable, TableHeaderColumn }from 'react-bootstrap-table';

import _ from 'lodash';

import { loadEventList } from 'src/redux/actions/Event/LoadEventList.Action';
import { routesObject } from "src/routes";
import Error from 'src/components/Error';

class EventListPage extends React.Component {
    constructor() {
        super();
        this.redirectToCreateEvent = this.redirectToCreateEvent.bind(this);
    }

    componentWillMount() {
        this.props.onLoadEventList();
    }

    redirectToCreateEvent() {
        this.props.dispatch(push(routesObject.private.createEvent.path));
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
            onRowClick: function(row){
                console.log(row);
            }
        };
        return(
            <div>
                <h1>Event List</h1>
                <Error error={error} />
                <Button bsStyle="primary" onClick={this.redirectToCreateEvent} block>Create Event</Button>
                <br/>
                <BootstrapTable data={ eventList } options={ options }>
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
    isLoading: PropTypes.bool.isRequired,
    eventList: PropTypes.array.isRequired,
    onLoadEventList: PropTypes.func.isRequired,
    dispatch: PropTypes.func.isRequired
};

function mapStateToProps({ eventReducer}) {
    let {
        error,
        isLoading,
        eventList
    } = eventReducer.eventListReducer;

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
        onLoadEventList: () => dispatch(loadEventList())
    };
}

const enhance = compose(
    connect(mapStateToProps, mapDispatchToProps),
    withRouter
);

const EventListPageContainer = enhance(EventListPage);

export default EventListPageContainer;
