import React, { Component } from 'react';

export default class Favorite extends Component {
    constructor(props){
        super(props)
        this.handleDelete = this.handleDelete.bind(this);
    }
    handleDelete(jobs) {
        this.props._delFavs(jobs)
    }
    render() {
        const { favorite } = this.props
        return (
            <div className="individual">
                <div className="ind-header grid-container">
                    <a href="#" className="job-title"> {favorite.title} </a>
                    <span className="locate"> {favorite.location} </span>
                </div>
                <div className="ind-footer">
                    <span className="info"> {favorite.company + "-" + favorite.type}</span>
                    <span class="icon-heart nofav" 
                        onClick={() => this.handleDelete(favorite)} 
                    >
                    </span>
                </div>
            </div>
        );
    }
}