import React from 'react';
import { withRouter }  from 'react-router-dom';
import PropTypes from 'prop-types';

import { routesObject } from 'src/routes';


const FallBackPage = ({ history }) => (
    <div>
        {history.push(routesObject.public.signIn.path)}
    </div>
);

FallBackPage.propTypes = {
    history: PropTypes.object.isRequired
};

export default withRouter(FallBackPage);
