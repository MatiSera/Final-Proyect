import React, { Component } from 'react';

class Details extends Component {
  constructor (props) {
    super(props)

  }


  handleRenderWithData (Details) {
    return(
      <div className="jobs-container col-xs-12">
        <div className="job-details" id="job-details">
          <div className="details-path">
            <p className="path-search">
              {Details.type + "-" + Details.location}
            </p>
          </div>
          <div className="details-title">
            <h1 className="title bold">
              {Details.tittle}
            </h1>
          </div>
          <div className="details-info grid-container">
            <p className="info grid-item">
              {Details.description}
            </p>
            <div className="img-details grid-item">
              <span className="company bold">
                {Details.company}
              </span>
              <div className="img-container col-xs-12">
              <img src={Details.company_logo} className="company-img" /> 
              </div>
              <div className="company-url">
              <a href={Details.company_url} > </a> 
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }

  handleDefault() {
    return (
      <div className="jobs-container col-xs-12">
        <div className="job-details" id="job-details">
          Sin detalles
        </div>
      </div>
    );
  }



  render() {
    const { Details } = this.props;
    return Details ? this.handleRenderWithData(Details) : this.handleDefault();
    
  }
}

export default Details;