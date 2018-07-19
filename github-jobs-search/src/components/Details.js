import React, { Component } from 'react';

class Details extends Component {
  constructor (props) {
    super(props)

  }


  handleRenderWithData (Details) {
    return(
      <div className="jobs-container col-xs-12">
        <div className="container-header">
            <h1 className="title bold">
              Jobs Details
            </h1>
        </div>
        <div className="job-details" id="job-details">
          <div className="details-path">
            <p className="path-search">
              {Details.type + "-" + Details.location}
            </p>
            <span className="company bold">
              {Details.company}
            </span>
          </div>
          <div className="details-title">
            <h1 className="title bold">
              {Details.tittle}
            </h1>
          </div>
          <div className="details-info col-lg-12">
            <div className="info col-lg-6">
            <div dangerouslySetInnerHTML={{ __html: Details.description }} />
            </div>
            <div className="img-details col-lg-6">
              <div className="img-container col-xs-12">
                <img src={Details.company_logo} className="company-img" width="200" height="200"/> 
              </div>
              <div className="company-url">
                <a target="_blank" href={Details.company_url} > { Details.company_url } </a> 
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }

  handleDefault() {
    return (
      <div className=" col-xs-12">
        <div className="job-details" id="job-details">
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