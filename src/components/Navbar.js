import { Navbar, Container, Nav} from 'react-bootstrap';

const ReactNavbar = () => {
    return (
        <Navbar bg="primary" variant="dark" expand="sm" fixed="top">
            <Container>
                <Navbar.Brand href="/">Product List</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="/">Home</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default ReactNavbar;