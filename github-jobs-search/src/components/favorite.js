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
                <div className="ind-header col-lg-12">
                    <a className="job-title"> 
                        {favorite.title} 
                    </a>
                    <span className="locate"> 
                        {favorite.location} 
                    </span>
                </div>
                <div className="ind-footer col-lg-12">
                    <span className="info"> {favorite.company + "-" + favorite.type}</span>
                    <span 
                        title="Delete from favorites"
                        class="icon-heart no-fav" 
                        onClick={() => this.handleDelete(favorite)} 
                    >
                    </span>
                </div>
            </div>
        );
    }
}