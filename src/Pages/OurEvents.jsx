import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import service from '../Images/zkservice.jpg'
import khanyisa2 from '../Images/khanyisa2.jpg'
import khanyisa1 from '../Images/khanyisa1.jpg'
import khanyisa3 from '../Images/Khanyisa3.jpeg'

import kids from '../Images/kids.jpg'
import zklworship from '../Images/worship2.jpg'
import youth from '../Images/youth1.jpg'
import lead from '../Images/lead.jpg'
import  f1 from '../Images/fellowship1.jpg'
import  f2 from '../Images/fellowship2.jpg'
import  cel2 from '../Images/celebration2.jpg'
import  cel6 from '../Images/celebratoin6.jpg'
import  bye1 from '../Images/bye1.jpg'
import  bye2 from '../Images/bye2.jpg'
import  bye3 from '../Images/bye3.jpg'
import  bye5 from '../Images/bye5.jpg'
import  bye6 from '../Images/bye6.jpg'

import test from '../Images/kids.mp4'
import celebration1 from '../video/celebration.mp4'

import  f3 from '../Images/fellowship3.jpg'
import  f4 from '../Images/fellowship4.jpg'


const OurEvents = () => {
  return (
    <>
    
    {/* <div style={{width:'80%'}}> */}
    {/* <div className="container" style={{marginTop:'8em'}}>
      <h1 className="abt" style={{width: '100%', textAlign:'center', fontSize: '3vw', fontWeight: 'bolder',color:'#a86b30'}}>Recent and Upcoming Events</h1>
      <h1>
        <hr className="hrline" style={{borderTop:'5px solid',paddingBottom:'1em', fontWeight:'bolder',  width:'10%', margin: 'auto', color:'#307672'}}></hr>
      </h1>
    </div> */}
    <div style={{marginTop:'5em'}}>
      <div className="container" style={{marginTop:'3em', marginBottom:'5em', width:'80%'}}>
        {/* <h1>
            <hr className="hrline" style={{borderTop:'2px solid',paddingBottom:'1em',  width:'55%', margin: 'auto', color:'#a86b30', marginTop:'2em'}}></hr>
        </h1> */}
        <h1 className="abt" style={{width: '100%', textAlign:'center', fontSize: '3vw', fontWeight: 'bolder',color:'#a86b30'}}>
          Celebrating Pastor and Mam' Gcilishe's work
        </h1>
              
        <h1>
          <hr className="hrline" style={{borderTop:'5px solid',paddingBottom:'1em',  width:'10%', margin: 'auto', color:'#a86b30'}}></hr>
        </h1>

        <h4 className="eventStatement" style={{textAlign: 'center', margin: 'auto',marginTop:'1em', width:'90%'}}>
            "Lorem ipsum sit amet, consectetur tempor incididunt ut labore
            et dolore magna. Ut enim ad minim veniam, quis nostrudris nisi ut
            a occaeca, sunt in culpa mollit anim id est laborum."
        </h4>
            
          <Row style={{marginTop:"6em"}}>
          <Col sm={4}style={{textAlign:'left', borderStyle:"double", borderColor:"#554348"}}>
                    
                    <h1 style={{textAlign:'center',marginTop:"2.5em", color:'#554348', fontWeight:'bolder', fontSize:'62'}}>
                      21 April 2022
                    </h1>
                    
                </Col>
                <Col sm={4}>
            <img src={cel6} style={{maxWidth:"100%",minWidth:"100%",maxHeight:"300px",minHeight:"300px",objectFit:'cover', marginRight:'3em'}}/>
            </Col>
            
            <Col sm={4}>
            <img src={cel2} style={{maxWidth:"100%",minHeight:"230px",objectFit:'cover', objectPosition: '100% 0', marginRight:'3em'}}/>
            </Col>
          </Row>
          <Row style={{marginTop:"2em"}}>
          <Col sm={6} >
            <video width="600" controls >
                    <source src={celebration1} type="video/mp4" style={{minHeight:"230px",}}/>
                    Your browser does not support HTML video.
                </video>            </Col>
            
            <Col sm={6}>
            <img src={service} style={{maxWidth:"100%",minHeight:"330px",objectFit:'cover', marginRight:'3em'}}/>
            </Col>            
          </Row>
    </div>
    <div style={{marginTop:'5em'}}>
    <div style={{width:'80%', marginBottom:'4em', margin:'auto', textAlign:"center"}}>
    <h1>
          <hr className="hrline" style={{borderTop:'5px solid',paddingBottom:'1em',  width:'10%', margin: 'auto', color:'#a86b30'}}></hr>
        </h1>
    <h1 className="abt" style={{width: '100%', textAlign:'center', fontSize: '3vw', fontWeight: 'bolder',color:'#a86b30'}}>
          Fellowshipping With Other Churches
        </h1>
            <Row style={{paddingTop:'4em'}}>
                <Col sm={6}style={{textAlign:'left', borderStyle:"double", borderColor:"#554348"}}>
                    <h1 style={{marginLeft:'0.6em', color:'#554348', fontWeight:'bolder', fontSize:'62px'}}>
                    Joint Service With Khanyisa Community Church
                    </h1>
                    <br />
                    <h6 style={{marginLeft:'1em', color:'#554348', fontWeight:'bolder', fontSize:'32px'}}>
                      21 April 2022
                    </h6>
                    
                </Col>
                <Col sm={6}>
                    <img src={service} style={{maxWidth:"100%",minHeight:"390px",objectFit:'cover', objectPosition: '100% 0', marginRight:'3em'}}/>
                </Col>
            </Row>
            <Row style={{marginTop:"2em",paddingBottom:'5em'}}>
                <Col sm={4}>
                    <img src={khanyisa3} style={{maxWidth:"100%",minWidth:"100%",minHeight:"390px",maxHeight:"390px",objectFit:'cover', marginRight:'3em'}}/>
                </Col>
            <Col sm={4}>
                    <img src={khanyisa2} style={{maxWidth:"100%",minWidth:"100%",minHeight:"390px",maxHeight:"390px",objectFit:'cover', objectPosition: '100% 0', marginRight:'3em'}}/>
                </Col>
                <Col sm={4}>
                    <img src={khanyisa1} style={{maxWidth:"100%",minWidth:"100%",minHeight:"390px",maxHeight:"390px",objectFit:'cover', objectPosition: '100% 0', marginRight:'3em'}}/>
                </Col>
                
            </Row>
    </div>
    </div>




    <div style={{marginTop:'2em'}}>
    <div style={{width:'80%', marginBottom:'4em', margin:'auto', textAlign:"center"}}>
    <h1>
          <hr className="hrline" style={{borderTop:'5px solid',paddingBottom:'1em',  width:'10%', margin: 'auto', color:'#a86b30'}}></hr>
        </h1>
    <h1 className="abt" style={{width: '100%', textAlign:'center', fontSize: '3vw', fontWeight: 'bolder',color:'#a86b30'}}>
          Bidding Farewell to Gabe and Ingrit
        </h1>
            <Row style={{paddingTop:'4em'}}>
            <Col sm={4}>
                    <img src={bye6} style={{maxWidth:"100%",minHeight:"390px",objectFit:'cover', marginRight:'3em'}}/>
                </Col>
                <Col sm={4}style={{textAlign:'center', borderStyle:"double", borderColor:"#554348"}}>
                    <h1 style={{marginLeft:'0.6em', color:'#554348', fontWeight:'bolder', fontSize:'32'}}>
                    Wishing<br/> <span style={{color:'#a86b30'}}>Gabriel and Ingrid,  and kids,</span><br/> blessings and a safe journey as they resettle back home
                    </h1>

                    <br />
                    <h6 style={{marginLeft:'1em', color:'#554348', fontWeight:'bolder', fontSize:'32px'}}>
                      21 April 2022
                    </h6>
                    
                </Col>
                <Col sm={4}>
                    <img src={bye2} style={{maxWidth:"100%",minWidth:"100%",minHeight:"390px",maxHeight:"390px",objectFit:'cover', marginRight:'3em'}}/>
                </Col>
                
                
            </Row>
            <Row style={{marginTop:"2em",paddingBottom:'5em'}}>
            <Col sm={4}>
                    <img src={bye3} style={{maxWidth:"100%",minWidth:"100%",minHeight:"390px",maxHeight:"390px",objectFit:'cover', objectPosition: '100% 0', marginRight:'3em'}}/>
                </Col>
                
            
                <Col sm={4}>
                    <img src={bye5} style={{maxWidth:"100%",minWidth:"100%",minHeight:"390px",maxHeight:"390px",objectFit:'cover', objectPosition: '100% 0', marginRight:'3em'}}/>
                </Col>
                <Col sm={4}>
                    <img src={bye1} style={{maxWidth:"100%",minWidth:"100%",minHeight:"390px",maxHeight:"390px",objectFit:'cover', objectPosition: '100% 0', marginRight:'3em'}}/>
                </Col>
                
            </Row>
    </div>
    </div>
    <div style={{marginTop:'2em'}}>
      <div style={{width:'80%', marginBottom:'4em', margin:'auto', textAlign:"center"}}>
        <h1>
          <hr className="hrline" style={{borderTop:'5px solid',paddingBottom:'1em',  width:'10%', margin: 'auto', color:'#a86b30'}}></hr>
        </h1>
        <h1 className="abt" style={{width: '100%', textAlign:'center', fontSize: '3vw', fontWeight: 'bolder',color:'#a86b30'}}>
          No upcoming events for now...
        </h1>
      </div>
    </div>
    
            {/*  */}
        </div>
    </>
  )
}

export default OurEvents