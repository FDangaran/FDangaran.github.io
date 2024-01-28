import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { Navbar, Nav, Form, FormControl, Button } from 'react-bootstrap';

export default class NavBar extends Component {
    render() {
        return (
            <div className="d-inline justify-content-between">
                <Navbar fixed="top" bg="light" variant="light">
                    <Navbar.Brand href="#home">GrabFood</Navbar.Brand>
                    <Form inline>
                    <FormControl type="text" placeholder="Type your location" className="mr-sm-2" />
                    </Form>
                    <Nav className="ml-auto">
                    <Nav.Link href="#bag">Bag</Nav.Link>
                    <Nav.Link href="/Login">Login/Sign Up</Nav.Link>
                    </Nav>
                </Navbar>
                <Form>
                    <FormControl type="text" placeholder="Search for a dish or restaurant" className="mr-sm-2" />
                </Form>
            </div>
  );
}
    }

