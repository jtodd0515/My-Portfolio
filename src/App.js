import React from 'react';

import './App.css';
import ProfileCard from './Components/Card';
import Footer from './Components/Footer';


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
              <a className="nav-link" href="Portfolio.html">Home <span className="sr-only">(current)</span></a>
            </li>
            <li className="nav-item active">
              <a className="nav-link" href="about.html">About</a>
            </li>
            <li className="nav-item active">
              <a className="nav-link" href="projects.html">Projects</a>
            </li>
            <li className="nav-item active">
              <a className="nav-link" href="contact.html">Contact</a>
            </li>
          </ul>
        </div>
      </nav>
      <ProfileCard />
      <ProfileCard />
      <ProfileCard />
      <ProfileCard />
      <ProfileCard />
      <ProfileCard />
      <ProfileCard />
      <ProfileCard />
      <ProfileCard />
      <ProfileCard />
      <ProfileCard />
      <ProfileCard />
      <ProfileCard />
      <ProfileCard />
      <ProfileCard />
      <ProfileCard />
      <ProfileCard />
      <ProfileCard />
      <ProfileCard />
      <ProfileCard />
      <ProfileCard />
      <ProfileCard />
      <ProfileCard />
      <ProfileCard />


      <Footer />
    </div>

  );
}
// 
export default App;
// OK