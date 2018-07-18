//Import React
import React, { Component } from 'react';

//Import Components
import Navbar from './components/Navbar';
import Search from './components/Search';
import Results from './components/Results';
import Favs from './components/Favs';
import Details from './components/Details';

//Import JobAPI call

import Request from './lib/Request';

//Import CSS
import './App.css';
import './Navbar.css';
import './Search.css';
import './Results.css';
import './Details.css';
import './grid-system.css';

// Icons CSS
import './css/fontello.css'


class App extends Component {
  constructor(props) {
    super(props);

    this.handleFav = this.handleFav.bind(this);
    this.handleDetails = this.handleDetails.bind(this);
    this.state = {
      results: [],
      favorites: JSON.parse(localStorage.get('Favorites')),
      details: {},
      data : null
    }
  this.handleSearch = this.handleSearch.bind(this);
    
  }
  handleSearch(data) {
    this.setState({
      data : data
    })
  }

  handleFav = (job, isFavorite) => {
    if (!isFavorite) { // if state in JobResult component indicates that job is favorite, favorite app state is updated with the Job,
      this.setState(prevState => {
        favorites: [...prevState.favorites, job]
      });
    } else { // In other case, the job is deleted from favorite array in app state.
      this.setState({
        favorites: this.state.favorites.filter( (j) => {return j !== job} )  
      });
    }
    serializedFavs = JSON.stringify(this.state.favorites);
    localStorage.set('Favorites', serializedFavs);
  }

  handleDetails = (id) => { //Recieve the id from the JobResult component, create the url to do the request to the details api and update the details in app state  
    const url = "https://crossorigin.me/https://jobs.github.com/positions/" + id + ".json";
    this.setState(prevState => {
      details: Request(url)
    });
  }


  
    

  render() {
    return (
      <div className="App">
        < Navbar />
        <div className="container">
          <div className="row">
            < Search
              _Search={this.handleSearch}
            />
          </div>
          <div className="row">
            <div>
              <div className="col-lg-6 col-xs-12">
                <div className="results-container">
                  < Results 
                    BringResults={this.state.data}
                    handleFav={this.handleFav} 
                    handleDetails={this.handleDetails}
                  />
                </div>
              </div>
              <div className="col-lg-6 col-xs-12">
                < Favs 
                  favorites = {this.state.favorites}
                />
              </div>
            </div>
          </div>
          <div className="grid-details col-xs-12">
          <div className="container-header">
            <h1 className="title bold">
            Jobs Details
            </h1>
          </div>
            < Details 
              details={this.state.details}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
