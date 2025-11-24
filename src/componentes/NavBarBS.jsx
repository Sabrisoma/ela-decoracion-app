import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import CartWidgetIcons from './CartWidgetIcons';

function NavBarBs() {
    return (
        <Navbar expand="lg" className="nav-container">
            <Container>
                <Navbar.Brand href="#home">
                    <img src='../ela_png-08.png' alt='logo' style={{ width: '8rem' }} />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="#home">Home</Nav.Link>
                        <NavDropdown title="Productos" id="basic-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">Agendas</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">
                                Combos
                            </NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Mates de Acero</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Mates Imperiales</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                    <CartWidgetIcons counter={4} />
                </Navbar.Collapse>

            </Container>
        </Navbar>
    );
}

export default NavBarBs;