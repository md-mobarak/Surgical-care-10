import { signOut } from 'firebase/auth';
import React from 'react';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../firebase.init';
import './Header.css'

const Header = () => {
    const [user, loading, error] = useAuthState(auth);
    const logout = () => {
        signOut(auth);
    };
    return (
        <div>
            <Navbar className='header-nav' collapseOnSelect expand="lg" bg="" sticky='top' variant="dark">
                <Container>
                    <Navbar.Brand as={Link} to="/home">Home</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link as={Link} to="/service">Services</Nav.Link>
                            <Nav.Link as={Link} to="/Blog">Blog</Nav.Link>

                        </Nav>
                        <Nav>
                            <Nav.Link as={Link} to="/about">About Me</Nav.Link>
                            {user ?
                                <button className='logout-btn' onClick={logout}>
                                    LogOut
                                </button>

                                :
                                <Nav.Link eventKey={2} as={Link} to="/login">
                                    Login
                                </Nav.Link>}

                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div >
    );
};

export default Header;