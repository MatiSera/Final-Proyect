//Import React
import React, { Component } from 'react';
import GITHUB from '../githubjobs.png';

class Navbar extends Component {
  render() {
    return (
      <div className="navbar">
        <div className="brand">
          <img src={GITHUB} className="logo" alt="logo" /> 
        </div>
      </div>
    )
  }   
}

export default Navbar;