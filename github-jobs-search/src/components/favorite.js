import React, { Component } from 'react';

export default class Favorite extends Component {


    render() {
        return (
            <div className="individual">
                <div className="ind-header grid-container">
                    <a href="#" className="job-title"> {this.props.favorites.tittle} </a>
                    <span className="locate"> {this.props.favorites.location} </span>
                </div>
                <div className="ind-footer">
                    <span className="info"> {this.props.favorites.company + "-" + this.props.favorites.type}</span>
                    <span class="icon-heart nofav"></span>
                </div>
            </div>
        );
    }
}