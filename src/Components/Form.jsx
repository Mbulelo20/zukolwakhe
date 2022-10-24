import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
function BasicExample() {
  return (
    <div style={{backgroundColor:'#F8F8F8', marginTop:'3em'}}>
        <h1 className="abt" style={{width: '100%', textAlign:'center', fontSize: '3vw', fontWeight: '100'}}>Contact Us</h1>
      <h1>
        <hr className="hrline" style={{borderTop:'5px solid',  width:'10%', margin: 'auto', color:'#307672'}}></hr>
      </h1>
        <Container style={{marginTop:'6em', marginBottom:'4em'}}>
            <Row>
                <Col sm={6}>
                    <h3>
                        We'd Love To Hear From You!
                    </h3>
                    <h5>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                sed do eiusmod tempo ion ullamco laborisr incididunt ut labore et dolore
                magna aliqua. Ut enim ad minim veniam, quis nostrud
                exercitation ullamco laboris
                    </h5>
                </Col>
                <Col sm={6}>
                <Form style={{marginTop:'3em', margin:'auto',  }}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Control type="email" placeholder="Your email" />
            </Form.Group>

            <FloatingLabel controlId="floatingTextarea2" label="Comments">
                <Form.Control
                as="textarea"
                placeholder=""
                style={{ height: '100px' }}
                />
            </FloatingLabel>
            <div className="minButton" style={{textAlign: 'center', borderColor:'#307672', marginTop:'2em'}}>
                <p style={{textAlign: 'center', margin:'auto', borderColor:'#307672'}}>Send</p>
              </div>
    </Form>
                </Col>
            </Row>
        </Container>
       
    </div>
  );
}

export default BasicExample;