import React from 'react';

import './App.css';
import ProfileCard from './Components/Card';
import MeCard from './Components/About';
import Jumbotron from './Components/Project';
import Footer from './Components/Footer';
import Projectcard from './Components/Projectcard';
import Contact from './Components/Contact';
import Gallery from './Components/Gallery';

import projectData from './projectData';

function App() {
  return (
    <div className="App">

      <div className="body">
      </div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-black container">
        <h2>James Todd</h2>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item active">
              <a className="nav-link" href="/">Home <span className="sr-only">(current)</span></a>
            </li>
            <li className="nav-item active">
              <a className="nav-link" href="#about">About</a>
            </li>
            <li className="nav-item active">
              <a className="nav-link" href="#projects">Projects</a>
            </li>
            <li className="nav-item active">
              <a className="nav-link" href="#contact">Contact</a>
            </li>
          </ul>
        </div>
      </nav>
      <ProfileCard />
      <MeCard />
      <Jumbotron />
      {/* projectData is an array of objects, all arrays have a map method */}
      {/* https://www.w3schools.com/jsref/jsref_map.asp */}
      {
        projectData.map((item, i) => {
          return <Projectcard key={`${item.imageUrl}-${i}`} imageUrl={item.imageUrl} title={item.title} text={item.text} />;
        })
      }
      
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
