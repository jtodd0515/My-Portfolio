import React, { Component } from 'react';

import { Button } from 'react-bootstrap';

import { Card } from 'react-bootstrap';

import './About.css';




export default class MeCard extends Component {

    render() {
        return (

        <Card className="card container" bg="transparent" style={{ width: '50rem' }}>
            <Card.Img className="card-img" variant="left" src="./images/Headshot.jpg/100px180" />
            <Card.Body>
            <Button className="button" variant="primary" href="./Resume/Resume-pdf.pdf">Resume</Button>
                <Card.Text className="card-text">
                    I'm a Software Engineer from Raleigh, NC. I have a professional background in Automotive Systems Technology, which like coding utilizes my knowledge of diagnostics and hands on ability to build or repair parts of the system.
                </Card.Text>
            </Card.Body>
        </Card>
        )
    }
}