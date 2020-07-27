import React from 'react';
import { Card } from 'react-bootstrap';

import weatherapp1 from '../../images/weatherapp1.png';
export default function Projectcard() {
    return (
        <div className="container">
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={weatherapp1} />
                <Card.Body>
                    <Card.Title>Weather App</Card.Title>
                    <Card.Text>
                        App Developed to show weather of zip code entered by user. The app was made with Ruby and utilizes Geocoder gem.
                    </Card.Text>
                </Card.Body>
            </Card>
        </div>
    )
}
