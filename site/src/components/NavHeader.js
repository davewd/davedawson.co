import React from 'react';
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Form from 'react-bootstrap/Form'
import FormControl from 'react-bootstrap/FormControl'
import Button from 'react-bootstrap/Button'

class NavHeader extends React.Component {

    constructor(){
        super();
    }

    render(){
        return(
          <Navbar bg="dark" variant="dark">
            <Navbar.Brand href="#home">DaveDawson.co</Navbar.Brand>
            <Nav className="mr-auto">
              <Nav.Link href="#home">Overview</Nav.Link>
              <Nav.Link href="#features">Projects</Nav.Link>
              <Nav.Link href="#pricing">Blog</Nav.Link>
            </Nav>
          </Navbar>
        )
    }
}

export default NavHeader;