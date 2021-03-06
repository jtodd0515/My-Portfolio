import React, { Component } from 'react';

import { Button } from 'react-bootstrap';

import { Card } from 'react-bootstrap';

import Headshot from '../../images/Headshot.jpg';

import './About.css';

export default class MeCard extends Component {

  render() {
    return (
      <div id='about'>

        <Card className="card2 container" bg="transparent" style={{ width: '50rem' }}>

          <Card.Img className="card-img" variant="left" src={Headshot} alt="Profile Headshot" />
          <Button className="button" variant="primary" href="/James_Todd.pdf" target='_blank'>Resume</Button>
          <Card.Body>
            <Card.Text className="edge scroll">
              I'm a Computer Programmer from Raleigh, NC. I have a professional background in Automotive Systems Technology, which like coding utilizes my knowledge of diagnostics and hands on ability to build and repair systems. Through my work in the automotive industry, it has enabled me to adapt to changing technology as well as challenged my problem solving skills ensuring I am at the top of my game at all times. The same problem solving skills have become exceptionally helpful in my progression into the coding and software engineering field. I am pleased to be able to apply the same mechanical and diagnositic techniques to software engineering that have more then proven their worth in the automotive world.
            </Card.Text>
          </Card.Body>

        </Card>
      </div>
    )
  }
}