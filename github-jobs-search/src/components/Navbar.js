//Import React
import React, { Component } from 'react';
import github from '../githubjobs.png';

class Navbar extends Component {
  render() {
    return (
      <div className="navbar">
        <div className="brand">
          <img src={github} className="logo" alt="logo" /> 
        </div>
      </div>
    )
  }   
}

export default Navbar;