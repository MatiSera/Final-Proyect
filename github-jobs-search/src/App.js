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
import './grid-system.css';

// Icons CSS
import './css/fontello.css'


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data : null
    }
    this.handleSearch = this.handleSearch.bind(this);
    
  }
  handleSearch(data) {
    this.setState({
      data : data
    })
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
                  />
                </div>
              </div>
              <div className="col-lg-6 col-xs-12">
                < Favs />
              </div>
            </div>
          </div>
          <div className="grid-details col-xs-12">
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
