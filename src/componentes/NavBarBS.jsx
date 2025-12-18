import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import CartWidgetIcons from './CartWidgetIcons';
import { NavLink } from 'react-router-dom';



function NavBarBs() {
    return (
        <Navbar expand="lg" className="nav-container">
            <Container>
                <Navbar.Brand as={NavLink} to='/'>
                    <img src='../ela_png-08.png' alt='logo' style={{ width: '8rem' }} />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link as={NavLink} to='/'>Home</Nav.Link>
                        <NavDropdown title="Productos" id="basic-nav-dropdown">
                            <NavDropdown.Item as={NavLink} to='/category/agendas'>Agendas</NavDropdown.Item>
                            <NavDropdown.Item as={NavLink} to='/category/combos'>
                                Combos
                            </NavDropdown.Item>
                            <NavDropdown.Item as={NavLink} to='/category/matesdeacero'>Mates de Acero</NavDropdown.Item>
                            <NavDropdown.Item as={NavLink} to='/category/matesimperiales'>Mates Imperiales</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                    <CartWidgetIcons counter={4} />
                </Navbar.Collapse>

            </Container>
        </Navbar>
    );
}

export default NavBarBs;

