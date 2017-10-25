import React from 'react';
import PropTypes from 'prop-types';
import { withRouter }  from 'react-router-dom';
import { connect } from 'react-redux';
import compose from 'recompose/compose';
import { ControlLabel, Form, FormGroup, FormControl, Button, Alert } from 'react-bootstrap';
import { push } from 'react-router-redux';

// import { signInUser } from 'src/redux/actions/Auth.Action';
import { createEvent } from 'src/redux/actions/Event/CreateEvent.Action';
import { routesObject } from "src/routes";
import Error from "src/components/Error";
import { convertFileToBase64 } from 'src/utils';


class CreateEventPage extends React.Component {
    constructor() {
        super();

        this.state = {
            Name: "",
            Time: "",
            Location: "",
            Description: "",
            Image: ""
        };

        this.handleCreate = this.handleCreate.bind(this);
        this.redirectToEventList = this.redirectToEventList.bind(this);
        this.handleImageUpload = this.handleImageUpload.bind(this);
    }

    redirectToEventList() {
        this.props.dispatch(push(routesObject.eventList.path));
    }

    handleCreate() {
        let { Name, Time, Location, Description, Image } = this.state;
        this.props.onCreateEvent({Name, Time, Location, Description, Image});
    }

    async handleImageUpload(e) {
        e.preventDefault();
        let result = await convertFileToBase64(e.target.files[0]);
        this.setState({Image: result});
    }
    render() {
        let { error, isLoading } = this.props;

        if (isLoading) {
            return (
                <div>
                    <h1>
                        Loading
                    </h1>
                </div>
            );
        }
        return(
            <div>
                <h1>Create Event</h1>
                <h4>All the fields are required, Otherwise, you will get a permission denied error</h4>
                <Error error={error}/>
                <Form>
                    <FormGroup
                        controlId="Name"
                    >
                        <ControlLabel>Event Name</ControlLabel>
                        <FormControl
                            type="text"
                            value={this.state.Name}
                            placeholder="Enter Event Name"
                            onChange={(e) => this.setState({Name: e.target.value}) }
                        />
                    </FormGroup>
                    <FormGroup
                        controlId="Time"
                    >
                        <ControlLabel>Event Time</ControlLabel>
                        <FormControl
                            type="text"
                            value={this.state.Time}
                            placeholder="Enter Event Time"
                            onChange={(e) => this.setState({Time: e.target.value}) }
                        />
                    </FormGroup>
                    <FormGroup
                        controlId="Location"
                    >
                        <ControlLabel>Event Location</ControlLabel>
                        <FormControl
                            type="text"
                            value={this.state.Location}
                            placeholder="Enter Event Location"
                            onChange={(e) => this.setState({Location: e.target.value}) }
                        />
                    </FormGroup>
                    <FormGroup
                        controlId="Description"
                    >
                        <ControlLabel>Event Description</ControlLabel>
                        <FormControl
                            type="text"
                            value={this.state.Description}
                            placeholder="Enter Event Description"
                            onChange={(e) => this.setState({Description: e.target.value}) }
                        />
                    </FormGroup>
                    <FormGroup
                        controlId="Image"
                    >
                        <ControlLabel>Event Image</ControlLabel>
                        <input
                            type="file"
                            accept="image/x-png,image/gif,image/jpeg"
                            onChange={(e) => this.handleImageUpload(e)}
                        />
                    </FormGroup>
                    <Button bsStyle="primary" onClick={this.handleCreate} block>Create</Button>
                </Form>
            </div>
        );

    }
}

CreateEventPage.propTypes = {
    error: PropTypes.string.isRequired,
    isLoading: PropTypes.bool.isRequired,
    success: PropTypes.bool.isRequired,
    onCreateEvent: PropTypes.func.isRequired,
    dispatch: PropTypes.func.isRequired
};

function mapStateToProps({ eventReducer }) {
    let {
        isLoading,
        success,
        error
    } = eventReducer.createEventReducer;
    return {
        isLoading,
        success,
        error
    };
}

function mapDispatchToProps(dispatch) {
    return {
        dispatch,
        onCreateEvent: (event) => dispatch(createEvent(event))
    };
}

const enhance = compose(
    connect(mapStateToProps, mapDispatchToProps),
    withRouter
);

const CreateEventPageContainer = enhance(CreateEventPage);

export default CreateEventPageContainer;
