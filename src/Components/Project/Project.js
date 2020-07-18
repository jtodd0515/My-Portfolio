import React, {Component} from 'react';

import { Jumbotron } from 'react-bootstrap';

import './Project.css';

export default class Jumbotron extends Component {
    
    render(){
        return (
            <Jumbotron fluid>
  <Container>
    <h1>Fluid jumbotron</h1>
    <p>
      This is a modified jumbotron that occupies the entire horizontal space of
      its parent.
    </p>
  </Container>
</Jumbotron>
        )
    }
}