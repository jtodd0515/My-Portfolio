
// Let's do a class based component here
// I forgot about another extension that is really helpful
import React, { Component } from 'react';

// 3rd party imports
import { Card } from 'react-bootstrap';

// Import css
import './Card.css';

// This is why you can't use class for styles anymore
export default class ProfileCard extends Component {

    render() {
        return (
             <Card className="card container" bg="transparent" style={{ width: '50em' }}>
                <Card.Body>
                <Card.Title>Computer Programmer</Card.Title>
                
                <Card.Text className="card-text">
                    I am a Computer Programmer with work in Java, C++, and other languages.
                </Card.Text>
                {/* <Card.Link href="#">Card Link</Card.Link>
                <Card.Link href="#">Another Link</Card.Link> */}
                </Card.Body>
            </Card>
        )
    }
}
// TADA 

// rccp -> React class component props
// rfc -> react function component, etc.

// Lets import it real fast.