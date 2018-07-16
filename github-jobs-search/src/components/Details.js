import React, { Component } from 'react';

class Details extends Component {
 
  render() { //render each element with props recieved from parent. 
    return (
      <div className="jobs-container">
        <div className="job-details" id="job-details">
          <div className="details-path">
            <p className="path-search">
              {this.props.details.type + "-" + this.props.details.location}
            </p>
          </div>
          <div className="details-title">
            <h1 className="title bold">
              {this.props.details.tittle}
            </h1>
          </div>
          <div className="details-info grid-container">
            <p className="info grid-item">
              {this.props.details.description}
            </p>
            <div className="img-details grid-item">
              <span className="company bold">
                {this.props.details.company}
              </span>
              <img src={this.props.details.company_logo} className="company-img" />
              <a href={this.props.details.company_url} >Company Url </a>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Details;