import React, { Fragment } from 'react'
import Background from '.././Images/zklworshipbb.jpg'
import corner from '../Images/zkl.png'
import Carousel from 'react-bootstrap/Carousel';

import MissionStatement from './MissionStatement'
import Ministries from './Ministries'
import Events from './Events'
import Form from '../Components/Form'
const Home = () => {
  return (
    <Fragment>
        <div style={{position: 'relative', color: 'white'}}>
            <Carousel fade interval={2000} >
                <Carousel.Item>
                    <img src={corner} alt="First slide" style={{width: '100%'}}/>
                    <div  className="homeText">
                        <h1 style={{fontSize: '5vw', color: 'white', textShadow: '2px 2px black'}}>Zukolwakhe Church</h1>
                        <h4 style={{textAlign: 'center', fontSize: '1.5vw', color: 'white', textShadow: '2px 2px black'}}>Welcome. Wamkelekile. Welkom.</h4>
                    </div>
                    {/* <Carousel.Caption>
                        <h3>First slide label</h3>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption> */}
                </Carousel.Item>
                <Carousel.Item>
                    <img src={Background} alt="First slide" style={{width: '100%',objectFit:'cover',}}/>
                    <div  className="homeText">
                        <h1 style={{fontSize: '5vw', color: 'white', textShadow: '2px 2px black'}}>Zukolwakhe Church</h1>
                        <h4 style={{textAlign: 'center', fontSize: '1.5vw', color: 'white', textShadow: '2px 2px black'}}>Grace To You</h4>
                    </div>
                    {/* <Carousel.Caption>
                        <h3>First slide label</h3>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption> */}
                </Carousel.Item>
            </Carousel>


            <div  className="homeText">
                <h1 style={{fontSize: '5vw', color: 'white', textShadow: '2px 2px black'}}>Zukolwakhe Church</h1>
                <h4 style={{textAlign: 'center', fontSize: '1.5vw', color: 'white', textShadow: '2px 2px black'}}>Welcome. Wamkelekile. Welkom.</h4>
            </div>
        </div>
        <div className="container">
            <MissionStatement />
        </div>
        <div style={{width: '100%', marginBottom:'5em'}}>
            <Ministries />
        </div>
        <div className="container">
            <Events />
        </div>
        <div>
            <Form />
        </div>
    </Fragment>
  )
}

export default Home