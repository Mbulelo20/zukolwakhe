import React, { Fragment } from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Background from '.././Images/background.png'
import corner from '../Images/zkl.png'

import MissionStatement from './MissionStatement'
import Ministries from './Ministries'
const Home = () => {
  return (
    <Fragment>
        <div style={{position: 'relative', color: 'white'}}>
            <img src={corner} style={{width: '100%'}}/>
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
    </Fragment>
  )
}

export default Home