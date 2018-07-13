//Import React

import React, { Component } from 'react';
import logo from './logo.svg';

//Import Components
import Navbar from './components/Navbar'; 

//Import CSS
import './App.css';
import './Navbar.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        < Navbar />
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h1 className="App-title">Welcome to React</h1>
          </header>
          <p className="App-intro">
            To get started, edit <code>src/App.js</code> and save to reload.
          </p>
      </div>
    );
  }
}

export default App;
