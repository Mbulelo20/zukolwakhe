import React from 'react'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import  cel4 from '../Images/celebration3.jpg'
import  worship from '../Images/worship.jpg'
import  worship22 from '../Images/worship22.jpg'

import  worshipvid from '../video/worship.mp4'

import  member1 from '../Images/member1.jpg'

import  member2 from '../Images/member2.jpg'

import  member3 from '../Images/member3.jpg'
import  member4 from '../Images/member4.jpg'



const AboutUs = () => {
  return (
    <>
    
    {/* <div style={{width:'80%'}}> */}
    <div className="container" style={{marginTop:'3em', marginBottom:'5em'}}>
      <h1 className="abt" style={{width: '100%', textAlign:'center', fontSize: '3vw', fontWeight: 'bolder',color:'#a86b30'}}>Meet Our Worship Team</h1>
      <h1>
        <hr className="hrline" style={{borderTop:'5px solid',paddingBottom:'1em',  width:'10%', margin: 'auto', color:'#307672'}}></hr>
      </h1>
      <h4 className="aboutUs" style={{textAlign: 'center', margin: 'auto',marginTop:'1em', width:'80%'}}>
            "The trumpeters and musicians joined in unison to give praise and thanks to the LORD. 
            Accompanied by trumpets, cymbals and other instruments, the singers raised their voices
             in praise to the LORD and sang" - 2 Chronicles 5:13
            </h4>
    </div>
    <div style={{marginTop:'2em',width:'80%', marginBottom:'4em', margin:'auto', textAlign:"center"}}>
            <Row style={{marginTop:'3em'}}>
                <Col sm={4} style={{marginBottom:'5em', marginTop:'3em'}}>
                    <img src={cel4} alt="" style={{minWidth:"100%",maxWidth:"100%",minHeight:"390px",maxHeight:"390px",objectFit:'cover', marginRight:'3em'}}/>
                </Col>
                <Col sm={4} style={{marginBottom:'5em', marginTop:'3em'}}>
                    <img src={worship} alt="" style={{minWidth:"100%",maxWidth:"100%",minHeight:"390px",maxHeight:"390px",objectFit:'cover', marginRight:'3em'}}/>
                </Col>
                <Col sm={4} style={{marginBottom:'5em', marginTop:'3em'}}>
                    <img src={worship22} alt="" style={{minWidth:"100%",maxWidth:"100%",minHeight:"390px",maxHeight:"390px",objectFit:'cover', marginRight:'3em'}}/>
                </Col>
                
            </Row>
    </div>
    <div style={{ backgroundColor: '#F8F8F8', marginTop:'1em', paddingBottom:'1em' }}>
        <div className="container" style={{marginTop:'3em', marginBottom:'4em'}}>
            <h1 className="abt" style={{paddingTop:'1em',width: '100%', textAlign:'center', fontSize: '3vw', fontWeight: 'bolder',color:'#a86b30'}}>Why We Value Music For God</h1>

            <h1>
                <hr className="hrline" style={{borderTop:'5px solid',  width:'10%', margin: 'auto', color:'#307672'}}></hr>
            </h1>
            <h6 className="aboutUs"style={{width: '100%', textAlign:'center', marginBottom:'2em', marginTop:'1em', fontSize:'1.5vw', color:'#444'}}>
            {/* <hr style={{color:'#BF6122', borderTop:'10px solid', marginBottom:'1em', width:'25%'}}/> */}

            Square Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                    sed do eiusmod tempo ion ullamco laborisr incididunt ut labore et dolore
                    magna aliqua. Ut enim ad minim veniam, quis nostrud
                    exercitation ullamco laboris
                    sed do eiusmod tempo ion ullamco laborisr incididunt ut labore et dolore
                    magna aliqua. Ut enim ad minsed do eiusmod tempo ion ullamco laborisr incididunt ut labore et dolore
                    magna aliqua. Ut enim ad min<br/><br/>
            
                    Square Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                    sed do eiusmod tempo ion ullamco laborisr incididunt ut labore et dolore
                    magna aliqua. Ut enim ad minim veniam, quis nostrud
                    exercitation ullamco lab<br/>orisSquare Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                    sed do eiusmod tempo ion ullamco laborisr incididunt ut labore et dolore
                    magna aliqua. Ut enim ad minim veniam, quis nostrud
                    exercitation ullamco laborisSquare Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                    sed do eiusmod tempo ion ullamco laborisr incididunt ut labore et dolore
                    magna aliqua. Ut enim ad minim veniam, quis nostrud
                    exercitation ullamco laboris
            </h6>
        </div>
        </div>
    <div style={{marginTop:'1em',width:'80%', marginBottom:'4em', margin:'auto', textAlign:"center"}}>

            <Row style={{marginTop:'7em'}}>
            <Col sm={6}>
            <video width="620" controls >
                    <source src={worshipvid} type="video/mp4" style={{minHeight:"230px",}}/>
                    Your browser does not support HTML video.
                </video>                   </Col>
            <Col sm={6}style={{textAlign:'left', borderStyle:'double',borderTop:'2px solid', borderColor:"#554348"}}>
                    <h1 style={{marginTop:"0.4em", marginLeft:'0.6em',marginBottom:'-0.2em', color:'#554348', fontWeight:'bolder', fontSize:'48px'}}>
                    A typical Sunday, led by the worship team, full of praise and joy for the Lord
                    </h1>
              
                </Col>
                
            </Row>
        </div>
        
        
        
        <div className="container" style={{marginTop:'7em'}}>
            <h1 className="abt" style={{width: '100%', textAlign:'center', fontSize: '3vw', fontWeight: 'bolder',color:'#a86b30'}}>Worship Team Members</h1>

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
            <Row style={{marginTop:'3em'}}>
                <div>
                  
                </div>
                <Col sm={3} style={{marginBottom:'5em', marginTop:'3em'}}>
                  
                    <img src={member4} alt="" style={{maxWidth:"100%",minWidth:"100%", marginRight:'5em'}}/>
                    
                </Col>
                <Col sm={3}>
                    <img src={member2} alt="" style={{maxWidth:"100%", marginRight:'5em'}}/>
                </Col>
                <Col sm={3} style={{marginBottom:'5em', marginTop:'3em'}}>
                    <img src={member1} alt="" style={{maxWidth:"100%", marginRight:'5em'}}/>
                </Col>
                <Col sm={3}>
                    <img src={member3} alt="" style={{maxWidth:"100%", marginRight:'5em'}}/>
                </Col>
                
            </Row>
        </div>
    </>
  )
}

export default AboutUs