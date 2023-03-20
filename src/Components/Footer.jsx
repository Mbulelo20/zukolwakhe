import React from 'react'
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Footer = () => {
  return (
    <Card style={{marginTop:'5em'}}>
      <Card.Footer className="text-muted" style={{ backgroundColor: "#414140"}}>
        <Container>
            <Row>
                <Col sm={4}>
                <h1 style={{fontSize: '1vw', color: 'white',borderStyle:'solid', borderRadius:'50px', borderColor:'red', width:'30%', height:'90%'}}>
                    Zukolwakhe <br/> Church
                </h1>
                </Col>
                <Col style={{color:'white'}}>
                    <h4 >Get In Touch</h4>
                    <p>zukolwakhe@examplemail.com <br/>+27 21 457 1322</p>
                </Col>
                <Col  style={{color:'white'}}>
                    <div style={{borderRadius:'50%'}}>
                        <h4 >Find Us</h4>
                    <p>23 235 Anthon Fransch St <br/> Mandela Park <br/> Khayelitsha 7784</p>
                    </div>
                    
                   
                </Col>
            </Row>
        </Container>
      </Card.Footer>

    </Card>
  )
}

export default Footer