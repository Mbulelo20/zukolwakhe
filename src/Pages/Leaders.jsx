import React from 'react'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import  avatar from '../Images/avatar.png'


const AboutUs = () => {
  return (
    <>
    
    {/* <div style={{width:'80%'}}> */}
    <div className="container" style={{marginTop:'3em', marginBottom:'5em'}}>
      <h1 className="abt" style={{width: '100%', textAlign:'center', fontSize: '3vw', fontWeight: 'bolder',color:'#a86b30'}}>Church Elders</h1>
      <h1>
        <hr className="hrline" style={{borderTop:'5px solid',paddingBottom:'1em',  width:'10%', margin: 'auto', color:'#307672'}}></hr>
      </h1>
      <h4 className="aboutUs" style={{textAlign: 'center', margin: 'auto',marginTop:'1em', width:'80%'}}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae, impedit! Assumenda dolorum, praesentium modi debitis autem consequuntur officiis sint consequatur a temporibus repellendus distinctio nemo error iusto quas perferendis aspernatur.
            </h4>
    </div>
    <div style={{marginTop:'8em',width:'80%', marginBottom:'4em', margin:'auto', textAlign:"center"}}>
            <Row style={{marginTop:'3em'}}>
                <Col sm={3} style={{margin:"auto", marginBottom:'5em', marginTop:'3em'}}>
                    <img src={avatar} alt="" style={{maxWidth:'300px',borderRadius:"50%", minWidth:"300px", maxHeight:"300px",  minHeight:"300px"}}/>
                    <h1 className="minHead" style={{textAlign: 'center', color: '#464646'}}>Pastor Vuyo Gcilishe</h1>
                    <h4 className="minHead" style={{textAlign: 'center', color: '#464646'}}>Senior Pastor</h4>

                    <p className="abt" style={{textAlign: 'center', color: '#464646'}}>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo ratione deleniti dolorum unde autem quia libero. Repellendus, ducimus tempore facere numquam repellat, quas fuga sapiente doloribus ut, quis unde modi?
                    </p>
                </Col>
                <Col sm={3} style={{margin:"auto",marginBottom:'5em', marginTop:'3em'}}>
                <img src={avatar} alt="" style={{maxWidth:'300px',borderRadius:"50%", minWidth:"300px", maxHeight:"300px",  minHeight:"300px"}}/>
                <h1 className="minHead" style={{textAlign: 'center', color: '#464646'}}>Pastor Stan Makwara</h1>
                <h4 className="minHead" style={{textAlign: 'center', color: '#464646'}}>Associate Pastor</h4>

                    <p className="abt" style={{textAlign: 'center', color: '#464646'}}>
                        Adipisicing elit. Illo ratione deleniti dolorum unde autem quia libero. Repellendus, ducimus tempore facere numquam repellat, quas fuga sapiente doloribus ut, quis unde modi?
                    </p>
                </Col>
                <Col sm={3} style={{margin:"auto",marginBottom:'5em', marginTop:'3em'}}>
                <img src={avatar} alt="" style={{maxWidth:'300px',borderRadius:"50%", minWidth:"300px", maxHeight:"300px",  minHeight:"300px"}}/>
                
                <h1 className="minHead" style={{textAlign: 'center', color: '#464646'}}>Pastor Nigel</h1>
                <h4 className="minHead" style={{textAlign: 'center', color: '#464646'}}>Associate Pastor</h4>

                    <p className="abt" style={{textAlign: 'center', color: '#464646'}}>
                        Lorem ipsum dolor sit amet, consectetur adipisicing utem quia libero. Repellendus, ducimus tempore facere numquam repellat, quas fuga sapiente doloribus ut, quis unde modi?
                    </p>
                </Col>
                
            </Row>
    </div>

    <div style={{backgroundColor:'#f8f8f8'}}>
        <div style={{backgroundColor:'#f8f8f8', marginTop:'2em',width:'80%', marginBottom:'4em', margin:'auto', textAlign:"center"}}>

            <Row style={{marginTop:'3em'}}>
                <Col sm={3} style={{margin:"auto", marginBottom:'5em', marginTop:'3em'}}>
                    <img src={avatar} alt="" style={{maxWidth:'300px',borderRadius:"50%", minWidth:"300px", maxHeight:"300px",  minHeight:"300px"}}/>
                    <h1 className="minHead" style={{textAlign: 'center', color: '#464646'}}>Tata Dumani Domo</h1>
                    <h4 className="minHead" style={{textAlign: 'center', color: '#464646'}}>Elder</h4>

                    <p className="abt" style={{textAlign: 'center', color: '#464646'}}>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo ratione deleniti dolorum unde autem quia libero. Repellendus, ducimus tempore facere numquam repellat, quas fuga sapiente doloribus ut, quis unde modi?
                    </p>
                </Col>
                <Col sm={3} style={{margin:"auto",marginBottom:'5em', marginTop:'3em'}}>
                <img src={avatar} alt="" style={{maxWidth:'300px',borderRadius:"50%", minWidth:"300px", maxHeight:"300px",  minHeight:"300px"}}/>
                <h1 className="minHead" style={{textAlign: 'center', color: '#464646'}}>Tata Galili Mthinkhulu</h1>
                <h4 className="minHead" style={{textAlign: 'center', color: '#464646'}}>Elder</h4>

                    <p className="abt" style={{textAlign: 'center', color: '#464646'}}>
                        Lorem ipsum dolor sit amet, consectetur ad unde autem quia libero. Repellendus, ducimus tempore facere numquam repellat, quas fuga sapiente doloribus ut, quis unde modi?
                    </p>
                </Col>
                <Col sm={3} style={{margin:"auto",marginBottom:'5em', marginTop:'3em'}}>
                <img src={avatar} alt="" style={{maxWidth:'300px',borderRadius:"50%", minWidth:"300px", maxHeight:"300px",  minHeight:"300px"}}/>
                
                <h1 className="minHead" style={{textAlign: 'center', color: '#464646'}}>Tata Phoko</h1>
                <h6 className="minHead" style={{textAlign: 'center', color: '#464646',}}>Elder</h6>

                    <p className="abt" style={{textAlign: 'center', color: '#464646'}}>
                        Lorem ipsum dolor dipisicing elit. Illo ratione deleniti dolorum unde autem quia libero. Repellendus, ducimus tempore facere numquam repellat, quas fuga sapiente doloribus ut, quis unde modi?
                    </p>
                </Col>
                
            </Row>
        </div>
    </div>
    
    </>
  )
}

export default AboutUs