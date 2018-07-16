//Import React

import React, { Component } from 'react';

//Import Components
import Navbar from './components/Navbar'; 
import Search from './components/Search';
import Results from './components/Results';
import Favs from './components/Favs';
import Details from './components/Details';

//Import CSS
import './App.css';
import './Navbar.css';
import './Search.css';
import './Results.css';
import './Details.css';

// Icons CSS
import './css/fontello.css'

class App extends Component {
  constructor(props){
    super(props);
    this.handleFav = this.handleFav.bind(this);
    this.state ={
      results: [],
      favorites: []
    }
  }

  handleFav = (newFav) => {
    this.setState( prevState => {
      favorites: [...prevState.movies, newFav]
    });
  }

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
                < Results handleFav = {this.handleFav} />
              </div>
              <div className="grid-item">
                < Favs />
              </div>
          </div>
          <div className="grid-details">
          <div className="container-header">
            <h1 className="title bold">
            Jobs Details
            </h1>
          </div>
            < Details />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
