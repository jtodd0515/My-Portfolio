
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
             <Card style={{ width: '50em' }}>
                <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
                <Card.Text>
                    Some quick example text to build on the card title and make up the bulk of
                    the card's content.
                </Card.Text>
                <Card.Link href="#">Card Link</Card.Link>
                <Card.Link href="#">Another Link</Card.Link>
                </Card.Body>
            </Card>
        )
    }
}
// TADA 

// rccp -> React class component props
// rfc -> react function component, etc.

// Lets import it real fast.