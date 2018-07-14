//Import React

import React, { Component } from 'react';
import logo from './logo.svg';

//Import Components
import Navbar from './components/Navbar'; 
import Search from './components/Search';
import Results from './components/Results';
import Favs from './components/Favs';

//Import CSS
import './App.css';
import './Navbar.css';
import './Search.css';
import './Results.css';
// Icons CSS
import './css/fontello.css'

class App extends Component {
  render() {
    return (
      <div className="App">
        < Navbar />
        <div className="container">
          <div className="search-section grid-search">
            < Search />
          </div>
          <div className="grid-container">
              <div className="grid-item">
                < Results />
              </div>
              <div className="grid-item">
                < Favs />
              </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
