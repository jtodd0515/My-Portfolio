import React from 'react';
import { Card } from 'react-bootstrap';

import './Projectcard.css';

export default function Projectcard(props) {

    const imageUrl = props.imageUrl;
    const title = props.title;
    const text = props.text;

    return (
        <div className="container">
            <Card className='w-18r'>
                <Card.Img variant="top" src={imageUrl} />
                <Card.Body>
                    <Card.Title className='black-text'>{title}</Card.Title>
                    <Card.Text className='black-text'>
                        {text}
                    </Card.Text>
                </Card.Body>
            </Card>
        </div>
    )
}
