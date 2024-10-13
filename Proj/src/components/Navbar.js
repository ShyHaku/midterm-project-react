import { Outlet, Link } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

const NavB = () => {
  console.log('NavB component rendered');
  return (
    <>
    <Navbar bg="dark" variant="dark" expand="lg">
      <Container>
        <Navbar.Brand href="#home">Inventory</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
          <Nav.Link as={Link} to="/Home">Home</Nav.Link>
            <Nav.Link as={Link} to="/addItem">Add Item</Nav.Link>
            <Nav.Link as={Link} to="/BigListContainer">Item List</Nav.Link>
            <Nav.Link as={Link} to="/LowStockItems">Low Stock</Nav.Link>
            <Nav.Link as={Link} to="/SearchBar">Search Item</Nav.Link>
            <Nav.Link as={Link} to="/DeleteSearch">Delete</Nav.Link>
            <Nav.Link as={Link} to="/UpdateSearch">Update</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    <Outlet />
    </>
  );
};

export default NavB;