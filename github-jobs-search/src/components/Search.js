import React, { Component } from 'react';

//Import Api
import JobsApi from '../lib/JobsApi.js';

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      location : null,
      description: null
    }

  this.handleInputChange = this.handleInputChange.bind(this);
  this.handleSubmit = this.handleSubmit.bind(this);
    
  }
  handleInputChange(e) {
    const {value, name} = e.target;
    this.setState({
      [name]: value
    });
  }
  //Si no encuentra en la búsqueda location o description manda null.
  handleSubmit(e) {
    let AuxSearch = {
      location : this.state.location || null,
      description : this.state.description || null,
    } 
    JobsApi('GET', AuxSearch)
      .then((results) => {
        console.log(results);
      })
      .catch((reason) => {
        console.error(reason);
      });
    e.preventDefault();
  }
  
  render() {
    return(
      <div className="search-container">
        <div className="header">
          <h1 className="title bold">
            Find your job!
          </h1>
        </div>
        <div className="search-fields">
          <form className="search-form" onSubmit={this.handleSubmit}>
            <div className="location">
              <input
                className="input position" 
                type="search" 
                name="location" 
                placeholder="Location" 
                onChange={this.handleInputChange}
              />
            </div>
            <div className="description">
              <input 
                className="input position" 
                type="search" 
                name="description" 
                placeholder="Jobs description" 
                onChange={this.handleInputChange}
              />
            </div>
            <div className="check input position">
              <label>
                <input 
                  type="checkbox" 
                  name="fulltime" 
                />
                Full time?
              </label>
            </div>
            <div className="input position">
              <button className="search-button " type="submit">Search</button>
            </div>
          </form>
        </div>
      </div>
    )
  }
}

export default Search; 