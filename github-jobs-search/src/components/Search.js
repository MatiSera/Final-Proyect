//Import React
import React, { Component } from 'react';

//Import Api
import JobsApi from '../lib/JobsApi.js';

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      location : null,
      description: null,
      fulltime : null
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
  
  handleSubmit(e) {
    let AuxSearch = {
      location : this.state.location || null,
      description : this.state.description || null,
      fulltime : this.state.fulltime || null
    }
    JobsApi('GET', AuxSearch)
      .then((results) => {
        this.props._Search(results);
      })
      .catch((reason) => {
        console.error(reason);
      });      
    e.preventDefault();
  }
  
  render() {
    return(
      <div className="col-lg-12">
        <div className="header">
          <h1 className="title bold">
            Find your job!
          </h1>
        </div>
        <div className="row">
          <form className="search-form" onSubmit={this.handleSubmit}>
            <div className="col-lg-12 col-xs-12">
              <div className="location col-lg-2  col-xs-12">
                <div>
                  <input
                    className="input position" 
                    type="search" 
                    name="location" 
                    placeholder="Location" 
                    onChange={this.handleInputChange}
                  />
                </div>
              </div>
              <div className="description col-lg-2  col-xs-12">
                <div>
                  <input 
                    className="input position" 
                    type="search" 
                    name="description" 
                    placeholder="Jobs description" 
                    onChange={this.handleInputChange}
                  />
                </div>
              </div>
              <div className="check col-lg-2  col-xs-6">
                <div>
                  <label>
                    <input 
                      type="checkbox" 
                      name="fulltime" 
                    />
                    Full time?
                  </label>
                </div>
              </div>
              <div className=" col-lg-2 col-xs-6">
                <div>
                  <button className="search-button " type="submit">Search</button>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    )
  }
}

export default Search; 