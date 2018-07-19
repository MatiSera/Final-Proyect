import React, { Component } from 'react';
import Favorite from './favorite'



class Favs extends Component {
  constructor(props){
    super(props)
    this._delFavs = this._delFavs.bind(this);
  }
  _delFavs(jobs) {
    this.props._delFavs(jobs)
  }
  
  handleRender (favorites) {
    const res = favorites.map((favorite) =>{  
      return (
        <Favorite 
          favorite={favorite} 
          _delFavs={this._delFavs}
        />
      )
    });
    return(
      <div className="favs-container">
        {res}
      </div>
    );
  }

  handleDefault() {
    return (
      <div className="favs-container">
        <div className="job-details" id="job-details">
          You don´t have favorites
        </div>
      </div>
    );
  }
  
  render() {
    const { favorites } = this.props
    return favorites ? this.handleRender(favorites) : this.handleDefault();
    
  }
}

export default Favs;