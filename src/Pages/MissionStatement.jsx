import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import corner from '../Images/zkl.png'
import africa from '../Images/africa.png'
import WC from '../Images/WC.png'
import ZA from '../Images/ZA.png'
import { Fragment } from 'react';
const MissionStatement = () => {
  return (
    <Fragment> 
    <div className="container" style={{marginTop:'3em'}}>
      <h1 className="abt" style={{width: '100%', textAlign:'center', fontSize: '3vw', fontWeight: '100'}}>About Us</h1>
      <h1>
        <hr className="hrline" style={{borderTop:'5px solid',  width:'10%', margin: 'auto', color:'#307672'}}></hr>
      </h1>
        <h3 className="missionStatement" style={{width: '100%', textAlign:'center', marginBottom:'2em', marginTop:'1em'}}>
          {/* <hr style={{color:'#BF6122', borderTop:'10px solid', marginBottom:'1em', width:'25%'}}/> */}

                To be a <span>local church</span> that transforms lives
                <br/>
                <span style={{fontSize:'3.5vw'}}>Through the Gospel of Jesus</span>
                <br/>
                Amongst the people of Khayelitsha
                <br/>
                And Regions beyond
            </h3>
            
        </div>
        <Container>
          <Row style={{textAlign:'center', marginBottom:'5em'}}>
            <Col sm={4} className="container">
                <img src={africa} style={{maxWidth: '70%'}}/>
            </Col>
            <Col sm={4} className="container">
                <img src={ZA}  style={{maxWidth: '70%'}}/>
            </Col>
            <Col sm={4} className="container">
                <img src={WC}  style={{maxWidth: '65%'}}/>
            </Col>
          </Row>
          <Row>
          <div className="minButton" style={{textAlign: 'center', margin:'auto', width:'250px', borderColor:'#307672'}}>
                <p style={{textAlign: 'center', margin:'auto'}}>Read More</p>
              </div>
          </Row>
        </Container>
        
    </Fragment>
  )
}

export default MissionStatement