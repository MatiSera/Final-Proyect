//Import React

import React, { Component } from 'react';
import logo from './logo.svg';

//Import Components
import Navbar from './components/Navbar'; 
import Search from './components/Search';

//Import CSS
import './App.css';
import './Navbar.css';
import './Search.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        < Navbar />
        <div className="container">
          <div className="search-section">
            < Search />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
