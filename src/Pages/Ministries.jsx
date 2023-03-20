import React from 'react'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import kids from '../Images/kids.jpg'
import zklworship from '../Images/worship2.jpg'
import youth from '../Images/youth1.jpg'
import lead from '../Images/lead.jpg'
const Ministries = () => {
  return (
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
              <h1 className="minHead" style={{textAlign: 'center', color: '#464646'}}>Church Leaders</h1>
              <p className="abt" style={{textAlign: 'center', color: '#464646'}}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                sed do eiusmod tempo ion ullamco laborisr incididunt ut labore et dolore
                magna aliqua. Ut enim ad minim veniam, quis nostrud
                exercitation ullamco laboris
              </p>
              <div className="minButton" style={{textAlign: 'center', borderColor:'#a86b30'}}>
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
              <div className="minButton"  style={{textAlign: 'center', borderColor:'#a86b30'}}>
                <a  href="/worship" style={{textDecoration:"none", color:'#a86b30', textAlign: 'center', margin:'auto'}}>Worship</a>
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
  )
}

export default Ministries