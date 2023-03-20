import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Carousel from 'react-bootstrap/Carousel';
import { Fragment } from 'react';
import kids from '../Images/kids.jpg'
import zklworship from '../Images/worship2.jpg'
import youth from '../Images/youth1.jpg'
const MissionStatement = () => {
  return (
    <Fragment> 
        <div className="container" style={{marginTop:'3em'}}>
            <h1 className="abt" style={{width: '100%', textAlign:'center', fontSize: '3vw', fontWeight: '100'}}>Recent/Upcoming Events</h1>
            <h1 >
                <hr className="hrline" style={{borderTop:'5px solid',  width:'10%', margin: 'auto', color:'#307672'}}></hr>
            </h1>
            <h4 className="eventStatement" style={{textAlign: 'center', margin: 'auto',marginTop:'2em', width:'80%'}}>
            "Lorem ipsum sit amet, consectetur tempor incididunt ut labore
            et dolore magna. Ut enim ad minim veniam, quis nostrudris nisi ut
            a occaeca, sunt in culpa mollit anim id est laborum."
            </h4>
        </div>
        <Container>
            <Row>
                <Col sm={3}>
                    <Carousel style={{margin: 'auto', marginTop:'4em', marginBottom:"5em", textShadow: '2px 2px black', height:"240px"}} >
                        <Carousel.Item >
                            <img className="imgobj1" src={kids} alt="First slide" style={{maxWidth: '100%', maxHeight:'260px', minHeight:'260px', objectFit:'cover', objectPosition: '100% 0' }} />
                        <Carousel.Caption>
                            <h3>First slide label</h3>
                            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                        </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img className="d-block w-100" src={youth} alt="Second slide" style={{maxWidth: '100%', maxHeight:'260px', minHeight:'100%', objectFit:'cover', objectPosition: '100% 0', }}/>

                            <Carousel.Caption>
                                <h3>Second slide label</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item style={{maxHeight:'300px'}}>
                            <img className="d-block w-100" src={zklworship} alt="Third slide" style={{maxWidth: '100%', maxHeight:'260px', minHeight:'260px', objectFit:'cover', objectPosition: '100% 0' }}/>
                            <Carousel.Caption>
                                <h3>Third slide label</h3>
                                <p>
                                    Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                                </p>
                            </Carousel.Caption>
                        </Carousel.Item>
                    </Carousel>
                </Col>

                <Col sm={6}>
                    <Carousel style={{maxWidth: '100%', margin: 'auto', marginTop:'3em', marginBottom:"5em", textShadow: '2px 2px black'}} >
                        <Carousel.Item style={{maxHeight:'300px'}}>
                            <img className="imgobj1" src={kids} alt="First slide" style={{maxWidth: '100%', minHeight:'100%', objectFit:'cover', objectPosition: '100% 0' }}/>
                            {/* , objectFit:'cover', objectPosition: '100% 0'}} */}
                            <Carousel.Caption>
                                <h3>First slide label</h3>
                                <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item style={{maxHeight:'300px'}}>
                            <img
                            className="d-block w-100"
                            src={youth}
                            alt="Second slide"
                            style={{maxWidth: '100%', minHeight:'100%', objectFit:'cover', objectPosition: '100% 0', }}
                            />

                            <Carousel.Caption>
                                <h3>Second slide label</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item style={{maxHeight:'300px'}}>
                            <img
                            className="d-block w-100"
                            src={zklworship}
                            alt="Third slide"
                            />

                            <Carousel.Caption>
                            <h3>Third slide label</h3>
                            <p>
                                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                            </p>
                            </Carousel.Caption>
                        </Carousel.Item>
                    </Carousel>
                </Col>
                <Col sm={3}>
                <Carousel style={{margin: 'auto', marginTop:'4em', marginBottom:"5em", textShadow: '2px 2px black', height:"240px"}} >
                        <Carousel.Item >
                            <img className="imgobj1" src={kids} alt="First slide" style={{maxWidth: '100%', maxHeight:'260px', minHeight:'260px', objectFit:'cover', objectPosition: '100% 0' }} />
                        <Carousel.Caption>
                            <h3>First slide label</h3>
                            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                        </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img className="d-block w-100" src={youth} alt="Second slide" style={{maxWidth: '100%', maxHeight:'260px', minHeight:'100%', objectFit:'cover', objectPosition: '100% 0', }}/>

                            <Carousel.Caption>
                                <h3>Second slide label</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item style={{maxHeight:'300px'}}>
                            <img className="d-block w-100" src={zklworship} alt="Third slide" style={{maxWidth: '100%', maxHeight:'260px', minHeight:'260px', objectFit:'cover', objectPosition: '100% 0' }}/>
                            <Carousel.Caption>
                                <h3>Third slide label</h3>
                                <p>
                                    Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                                </p>
                            </Carousel.Caption>
                        </Carousel.Item>
                    </Carousel>
                </Col>
            </Row>
            <Row>
          <div className="minButton" style={{textAlign: 'center', margin:'auto', width:'250px', borderColor:'#307672'}}>
                <p style={{textAlign: 'center', margin:'auto'}}><a href="/whatshappening" style={{textDecoration: 'none', color:'#307672'}}>See More</a></p>
              </div>
          </Row>
        </Container>
        
        
    </Fragment>
  )
}

export default MissionStatement