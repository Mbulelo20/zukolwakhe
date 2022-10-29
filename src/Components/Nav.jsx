import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function CollapsibleExample() {
  return (
    <Navbar collapseOnSelect expand="lg" variant="transparentz" style={{backgroundColor: 'transparent', height:'3em'}}>
      <Container>
        <Navbar.Brand href="#home" style={{fontSize: '36px', color:'#000000', fontWeight: '600'}}>ZukoLwakhe</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto" >
            <Nav style={{marginLeft: '40%'}}>
                <Nav.Link href="#features" className='links'>ABOUT</Nav.Link>
                <Nav.Link href="#pricing" className='links'>MINISTRIES</Nav.Link>
                <Nav.Link href="#features" className='links'>EVENTS</Nav.Link>
                <Nav.Link href="#features" className='links'>MISSION</Nav.Link>
                <Nav.Link href="#features" className='links'>DONATE</Nav.Link>             
                </Nav>
          </Nav>
          <Nav>
            <Nav.Link href="#deets" className="links">Contact Us</Nav.Link>
            
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default CollapsibleExample;