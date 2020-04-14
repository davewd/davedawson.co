import React from 'react';
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import OnlineIdentities from './OnlineIdentities'
import ColourPalette from './ColourPalette'


class NavHeader extends React.Component {

    render(){
        return(
          <Navbar bg="dark" variant="dark">
            <Navbar.Brand href="#home">DD</Navbar.Brand>
            <Nav className="mr-auto">
              <Nav.Link href="#overview">Overview</Nav.Link>
              <Nav.Link href="#projects">Projects</Nav.Link>
              <Nav.Link href="#blog">Blog</Nav.Link>
            </Nav>
            <OnlineIdentities/>
            <ColourPalette/>
          </Navbar>
        )
    }
}

export default NavHeader;