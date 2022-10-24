import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import corner from '../Images/zkl.png'
const Worship = () => {
  return (
    <div className="container" style={{marginTop:'10em', backgroundColor: 'red'}}>
      <h1 className="abt" style={{width: '100%', textAlign:'center', fontSize: '3vw', fontWeight: '100'}}>About Us</h1>
      <h1>
        <hr className="hrline" style={{borderTop:'5px solid',  width:'10%', margin: 'auto', color:'#307672'}}></hr>
      </h1>
        <h3 className="missionStatement" style={{width: '100%', textAlign:'center'}}>
          {/* <hr style={{color:'#BF6122', borderTop:'10px solid', marginBottom:'1em', width:'25%'}}/> */}

                To be a <span>local church</span> that transforms lives
                <br/>
                <span style={{fontSize:'3.5vw'}}>Through the Gospel of Jesus</span>
                <br/>
                Among the people of Khayelitsha
                <br/>
                And Regions beyond
            </h3>
            
        </div>
  )
}

export default Worship