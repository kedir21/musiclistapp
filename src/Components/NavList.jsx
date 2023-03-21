import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { MovieContext } from './MovieContext';
import React,{useContext} from 'react';

function NavList() {
  const [musics ,setMusics]= useContext(MovieContext)

  return (
    <Navbar bg="dark" variant="dark" fixed expand='lg' >
      <Container>
        <Navbar.Brand href="#home">Kedir21</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="#home">number of Music: {musics.length} </Nav.Link>

          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavList;