import React, {Component} from 'react';

import { Jumbotron } from 'react-bootstrap';

import './Project.css';

export default class Fluid extends Component {
    
    render(){
        return (
            <Jumbotron fluid className="jumbotron">
            
            <h1>Projects</h1>
            <p>
              These are the projects I have created using various languages.
            </p>
            </Jumbotron>
        )
    }
}