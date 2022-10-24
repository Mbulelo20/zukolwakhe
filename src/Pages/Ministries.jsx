import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import W1 from '../Images/worship.jpg'
import W2 from '../Images/worship1.jpg'
import W3 from '../Images/worship2.jpg'
// import W4 from '../Images/worship3.png'
import W5 from '../Images/test1.png'
import W6 from '../Images/test5.png'
import { Fragment } from 'react';
import kids from '../Images/kids.jpg'
import zklworship from '../Images/worship2.jpg'
import youth from '../Images/youth1.jpg'
import lead from '../Images/lead.jpg'

const Ministries = () => {
  return (
    <div style={{marginTop:'7em', backgroundColor: '#F8F8F8'}}>

    <Container>
      <Row>
        <Col sm={3} className="container" style={{marginTop:'7em', marginBottom:'5em'}}>
            <div class="image-grid">
              <img src={lead} className="imgobj" style={{minWidth: '100%', maxHeight:'230px', objectFit:'cover', objectPosition: '100% 0'}} />
            </div>
            <div style={{textAlign: 'center'}}>
              <h1 className="minHead" style={{textAlign: 'center', color: '#464646'}}>Leadership</h1>
              <p className="abt" style={{textAlign: 'center', color: '#464646'}}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                sed do eiusmod tempo ion ullamco laborisr incididunt ut labore et dolore
                magna aliqua. Ut enim ad minim veniam, quis nostrud
                exercitation ullamco laboris
              </p>
              <div className="minButton" style={{textAlign: 'center', borderColor:'#307672'}}>
                <p style={{textAlign: 'center', margin:'auto', borderColor:'#307672'}}>Eldership</p>
              </div>
            </div>
        </Col>
        <Col sm={3} className="container" style={{marginTop:'7em', marginBottom:'5em'}}>
            <div class="image-grid">
                <img src={zklworship}  style={{minWidth: '100%', maxHeight:'230px', objectFit:'cover', objectPosition: '100% 0'}} />           
            </div>
            <div style={{textAlign: 'center'}}>
              <h1 className="minHead" style={{textAlign: 'center', color: '#464646'}}>Worship</h1>
              <p className="abt" style={{textAlign: 'center', color: '#464646'}}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                sed do eiusmod tempo ion ullamco laborisr incididunt ut labore et dolore
                magna aliqua. Ut enim ad minim veniam, quis nostrud
                exercitation ullamco laboris
              </p>
              <div className="minButton" style={{textAlign: 'center', borderColor:'#307672'}}>
                <p style={{textAlign: 'center', margin:'auto'}}>Worship</p>
              </div>
            </div>
        </Col>
        <Col sm={3} className="container" style={{marginTop:'7em', marginBottom:'5em'}}>
            <div class="image-grid">
                <img src={youth} style={{minWidth: '100%', maxHeight:'230px', objectFit:'cover', objectPosition: '100% 0'}} />           
            </div>
            <div style={{textAlign: 'center'}}>
              <h1 className="minHead" style={{textAlign: 'center', color: '#464646'}}>Youth</h1>
              <p className="abt" style={{textAlign: 'center', color: '#464646'}}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                sed do eiusmod tempo ion ullamco laborisr incididunt ut labore et dolore
                magna aliqua. Ut enim ad minim veniam, quis nostrud
                exercitation ullamco laboris
              </p>
              <div className="minButton" style={{textAlign: 'center', borderColor:'#307672'}}>
                <p style={{textAlign: 'center', margin:'auto'}}>Youth</p>
              </div>
            </div>
        </Col>
        <Col sm={3} className="container" style={{marginTop:'7em', marginBottom:'5em'}}>
            <div class="image-grid">
            <img src={kids} style={{minWidth: '100%', maxHeight:'230px',minHeight:'230px', objectFit:'cover', objectPosition: '100% 0'}}  />         
            </div>
            <div style={{textAlign: 'center'}}>
              <h1 className="minHead" style={{textAlign: 'center', color: '#464646'}}>Kids</h1>
              <p className="abt" style={{textAlign: 'center', color: '#464646'}}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                sed do eiusmod tempo ion ullamco laborisr incididunt ut labore et dolore
                magna aliqua. Ut enim ad minim veniam, quis nostrud
                exercitation ullamco laboris
              </p>
              <div className="minButton" style={{textAlign: 'center', borderColor:'#307672'}}>
                <p style={{textAlign: 'center', margin:'auto'}}>Kids</p>
              </div>
            </div>
        </Col>
      </Row>
     
    </Container>
    </div>
  )
}

export default Ministries