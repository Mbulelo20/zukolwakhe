import React from 'react'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import service from '../Images/zkservice.jpg'
import kids from '../Images/kids.jpg'
import zklworship from '../Images/worship2.jpg'
import youth from '../Images/youth1.jpg'
import lead from '../Images/lead.jpg'
import  f1 from '../Images/fellowship1.jpg'
import  f2 from '../Images/fellowship2.jpg'

import  f3 from '../Images/fellowship3.jpg'
import  f4 from '../Images/fellowship4.jpg'


const AboutUs = () => {
  return (
    <>
    
    {/* <div style={{width:'80%'}}> */}
    <div className="container" style={{marginTop:'3em', marginBottom:'5em'}}>
      <h1 className="abt" style={{width: '100%', textAlign:'center', fontSize: '3vw', fontWeight: 'bolder',color:'#a86b30'}}>About Our Church</h1>
      <h1>
        <hr className="hrline" style={{borderTop:'5px solid',paddingBottom:'1em',  width:'10%', margin: 'auto', color:'#307672'}}></hr>
      </h1>
    </div>
    <div style={{marginTop:'3em',width:'80%', marginBottom:'4em', margin:'auto', textAlign:"center"}}>
            <Row>
                <Col sm={6}style={{textAlign:'left', borderStyle:'double',borderTop:'2px solid', borderColor:"#554348"}}>
                    <h1 style={{marginTop:"0.4em", marginLeft:'0.6em',marginBottom:'-0.2em', color:'#554348', fontWeight:'bolder', fontSize:'48px'}}>
                    ZukoLwakhe
                    </h1>
                    <h1 style={{marginLeft:'0.6em', color:'#554348', fontWeight:'bolder', fontSize:'48px'}}>
                    Church
                    </h1>
                    <h4 className="aboutUs" style={{marginLeft:'1em',marginTop:'1em', color:'#222'}}>
                    Square Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                sed do eiusmod tempo ion ullamco laborisr incididunt ut labore et dolore
                magna aliqua. Ut enim ad minim veniam, quis nostrud
                exercitation ullamco laboris<br/>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                sed do eiusmod tempo ion ullamco laborisr incididunt ut labore et dolore
                    </h4>
                </Col>
                <Col sm={6}>
                    <img src={service} alt="" style={{maxWidth:"100%",minHeight:"390px",objectFit:'cover', objectPosition: '100% 0', marginRight:'3em'}}/>
                </Col>
            </Row>
            <Row style={{marginTop:'7em'}}>
            <Col sm={6}>
                    <img src={service} alt="" style={{maxWidth:"100%",minHeight:"390px",objectFit:'cover', objectPosition: '100% 0', marginRight:'3em'}}/>
                </Col>
            <Col sm={6}style={{textAlign:'left', borderStyle:'double',borderTop:'2px solid', borderColor:"#a86b30"}}>
                    <h1 style={{marginTop:"0.4em", marginLeft:'0.6em',marginBottom:'-0.2em', color:'#a86b30', fontWeight:'bolder', fontSize:'48px'}}>
                    ZukoLwakhe
                    </h1>
                    <h1 style={{marginLeft:'0.6em', color:'#a86b30', fontWeight:'bolder', fontSize:'48px'}}>
                    Church
                    </h1>
                    <h4 className="aboutUs" style={{marginLeft:'1em',marginTop:'1em', color:'#222'}}>
                    Square Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                sed do eiusmod tempo ion ullamco laborisr incididunt ut labore et dolore
                magna aliqua. Ut enim ad minim veniam, quis nostrud
                exercitation ullamco laboris<br/>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                sed do eiusmod tempo ion ullamco laborisr incididunt ut labore et dolore
                    </h4>
                </Col>
                
            </Row>
        </div>
        
        
        <div style={{ backgroundColor: '#F8F8F8', marginTop:'5em'}}>
        <div className="container" style={{marginTop:'3em', marginBottom:'4em'}}>
            <h1 className="abt" style={{paddingTop:'1em',width: '100%', textAlign:'center', fontSize: '3vw', fontWeight: 'bolder',color:'#a86b30'}}>We Value Fellowship</h1>

            <h1>
                <hr className="hrline" style={{borderTop:'5px solid',  width:'10%', margin: 'auto', color:'#307672'}}></hr>
            </h1>
            <h6 className="aboutUs"style={{width: '100%', textAlign:'center', marginBottom:'2em', marginTop:'1em', fontSize:'1.5vw', color:'#444'}}>
            {/* <hr style={{color:'#BF6122', borderTop:'10px solid', marginBottom:'1em', width:'25%'}}/> */}

            Square Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                    sed do eiusmod tempo ion ullamco laborisr incididunt ut labore et dolore
                    magna aliqua. Ut enim ad minim veniam, quis nostrud
                    exercitation ullamco laboris
            </h6>
            <Row style={{marginTop:'3em'}}>
                
                <Col sm={3} style={{marginBottom:'5em', marginTop:'3em'}}>
                    <img src={f1} alt="" style={{maxWidth:"100%", marginRight:'5em'}}/>
                </Col>
                <Col sm={3}>
                    <img src={f3} alt="" style={{maxWidth:"100%", marginRight:'5em'}}/>
                </Col>
                <Col sm={3} style={{marginBottom:'5em', marginTop:'3em'}}>
                    <img src={f2} alt="" style={{maxWidth:"100%", marginRight:'5em'}}/>
                </Col>
                <Col sm={3}>
                    <img src={f4} alt="" style={{maxWidth:"100%", marginRight:'5em'}}/>
                </Col>
                
            </Row>
        </div>
        </div>
        <div className="container" style={{marginTop:'3em'}}>
            <h1 className="abt" style={{width: '100%', textAlign:'center', fontSize: '3vw', fontWeight: 'bolder',color:'#a86b30'}}>Our Commited Ministries</h1>

            <h1>
                <hr className="hrline" style={{borderTop:'5px solid', paddingBottom:'1em', width:'10%', margin: 'auto', color:'#307672'}}></hr>
            </h1>
            <h6 className="aboutUs"style={{width: '100%', textAlign:'center',fontSize:'1.5vw', color:'#444'}}>
            {/* <hr style={{color:'#BF6122', borderTop:'10px solid', marginBottom:'1em', width:'25%'}}/> */}

            Square Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                    sed do eiusmod tempo ion ullamco laborisr incididunt ut labore et dolore
                    magna aliqua. Ut enim ad minim veniam, quis nostrud
                    exercitation ullamco laboris
            </h6>
            <Row style={{marginBottom:'2em', marginTop:'4em'}}>
                
            <Col sm={6} className="container" >
            <div class="image-grid">
              <img src={lead} alt="" className="imgobj" style={{minWidth: '100%', maxHeight:'350px', objectFit:'cover', objectPosition: '100% 0'}} />
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
              <a  href="/leaders" style={{textDecoration:"none", color:'#a86b30', textAlign: 'center', margin:'auto'}}>Leadership</a>
              </div>
            </div>
        </Col>
        <Col sm={6} className="container">
            <div class="image-grid">
                <img src={zklworship} alt="" style={{minWidth: '100%', maxHeight:'350px', objectFit:'cover', objectPosition: '100% 0'}} />           
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
        
        </Row>
        <Row  style={{marginTop:'4em'}}>
        <Col sm={6} className="container" >
            <div class="image-grid">
                <img src={youth} alt="" style={{minWidth: '100%', maxHeight:'350px', objectFit:'cover', objectPosition: '100% 0'}} />           
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
        <Col sm={6} className="container">
            <div class="image-grid">
            <img src={kids} alt="" style={{minWidth: '100%', maxHeight:'350px',minHeight:'350px', objectFit:'cover', objectPosition: '100% 0'}}  />         
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
        </div>
    </>
  )
}

export default AboutUs