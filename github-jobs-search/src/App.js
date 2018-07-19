//Import React
import React, { Component } from 'react';

//Import Components
import Navbar from './components/Navbar';
import Search from './components/Search';
import Results from './components/Results';
import Favs from './components/Favs';
import Details from './components/Details';

//Import JobAPI call


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
    this.state = {
      results: [],
      favorites: null,
      details: null,
      data : null
    }
    this.handleFav = this.handleFav.bind(this);
    this.handleDetails = this.handleDetails.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
    this._delFavs = this._delFavs.bind(this);
  }
  handleSearch(data) {
    this.setState({
      data : data
    })
  }

  handleFav = (job, isFavorite) => {
    if (!isFavorite) {
      let favs = this.state.favorites ? this.state.favorites : []; 
      if (this.state.favorites || Array.isArray(favs)){
        if (favs.length > 0) {
          let cont = 0 
          favs.forEach((e) => {
            if (e.id === job.id) {
               alert('Ya es un favorito!')
            } else if ( cont === 0 ) {
              cont = 1
              favs.push(job);
            } 
          });
        } else {
          favs.push(job);
        }
      }
      this.setState({
        favorites: favs
      });
    }
  }

  handleDetails = (job) => {
    this.setState({
      details: job
    });
  }
  _delFavs(jobs) {
    let favs = this.state.favorites
    favs.forEach( (e, i)=>{
      if(e.id === jobs.id){
        favs.splice(i, 1);
      }
    });
    this.setState({
      favorites: favs
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
                  favorites={this.state.favorites}
                  _delFavs={this._delFavs}
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
              Details={this.state.details}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
