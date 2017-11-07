import React  from 'react';
// import PropTypes from 'prop-types';
import { Navbar, Nav, NavItem } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import { routesObject} from "src/routes";

const Header = props => { // eslint-disable-line no-unused-vars
    // const { user } = props;
    let { eventList } = routesObject.private;
    return (
        <Navbar inverse collapseOnSelect fixedTop>
            <Navbar.Header>
                <Navbar.Brand>
                    <a>NUCSSA</a>
                </Navbar.Brand>
                <Navbar.Toggle />
            </Navbar.Header>
            <Navbar.Collapse>
                <Nav>
                    <LinkContainer to={ eventList.path }>
                        <NavItem eventKey={ eventList.name }>Event</NavItem>
                    </LinkContainer>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
};

Header.propTypes = {
};

export default Header;