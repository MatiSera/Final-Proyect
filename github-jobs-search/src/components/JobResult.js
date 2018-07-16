import React, { Component } from 'react';

class JobResult extends Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
        this.state = {
            isFavorite: false;
        }
    }

    handleClick = (e) => {
        if (e.target.name == "job_tittle") {
            this.props.handleDetails(this.props.job.id);
        } else {
            this.props.handleFav(this.props.job, this.state.isFavorite);
            this.setState(prevState => {
                isFavorite: !prevState.isFavorite
            });
        }
    }

    render() {
        <li className="individual">
            <div className="ind-header grid-container">
                <a
                    href="#job-details"
                    name="job_tittle"
                    onClick={this.handleClick}
                >
                    {this.props.job.tittle}
                </a>
                <span className="locate">{this.props.job.location}</span>
            </div>
            <div className="ind-footer">
                <span className="info"> {this.props.job.company + "-" + this.props.job.type}</span>
                <span class="icon-heart nofav" onClick={this.handleClick} >
                    {!isFavorite ? (
                        <i class="fa fa-heart-o"></i> //MUST BE ADDED TO INDEX https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css
                    ) : (
                        <i class="fa fa-heart"></i>
                        )
                    }
                </span>
            </div>
        </li>
    }
}

export default JobResult;