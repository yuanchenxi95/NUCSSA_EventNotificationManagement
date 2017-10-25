import React from 'react';
import PropTypes from 'prop-types';

import { noErrorValue } from 'src/utils';
import { Alert } from 'react-bootstrap';

const Error = (props) => {
    let { error } = props;
    if (error !== noErrorValue) {
        return (
            <div>
                <Alert bsStyle="danger">
                    {error}
                </Alert>
            </div>
        );
    }
    return (<div></div>);
};

Error.propTypes = {
    error: PropTypes.string.isRequired
};

export default Error;