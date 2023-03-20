import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function CollapsibleExample() {
  return (
    <Navbar collapseOnSelect expand="lg" variant="dark" style={{backgroundColor: 'white'}}>
      <Container>
        <Navbar.Brand href="/" style={{fontSize: '36px', color:'#554348',borderStyle:"groove", fontWeight: '600'}}>ZukoLwakhe</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto" >
            <Nav style={{marginLeft: '50%'}}>
                <Nav.Link href="/zukolwakhe" className='links'>About</Nav.Link>
                <Nav.Link href="/ministries" className='links'>Ministries</Nav.Link>
                <Nav.Link href="/whatshappening" className='links'>Events</Nav.Link>
                <Nav.Link href="#features" className='links'>Mission</Nav.Link>
                <Nav.Link href="#features" className='links'>Donate</Nav.Link>             
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