import React, { Component } from 'react';
import Favorite from './Favorite'

class Favs extends Component {
  render() {
    const favorites = this.props.favorites.map((favorite) =>
      <Favorite favorite = {favorite} />
    );

    return(
     // <h2> My Favs ({favorites.length}) </h2> faltaría agregar algo como esto 
      <div className="favs-container">
        {favorites}
      </div>
    );
  }
}

export default Favs;