//Import React
import React, { Component } from 'react';
import JobResult from './JobResult';


class Results extends Component {
//<<<<<<< julian
  render() {
    const jobList = this.props.jobs.map((job) => // Create a jobList with parameters to handle fav event and details event
      <JobResult
        key = {job.id}
        job = {job}
        handleFav = {this.props.handleFav}
        handleDetails = {this.props.handleDetails}
      /> 
    );
  
    return (
      <div className="results-container">
          {jobList}
//=======
  constructor(props) {
    super(props);

  }

  handleRenderResults(BringResults) {
    return BringResults.map(jobs => {
      return (
        <div className="results">
          <div className="individual">
            <div className="ind-header col-lg-12">
              <a href="" className="job-title">{jobs.title}</a>
              <span className="locate">{jobs.location}</span>
            </div>
            <div className="ind-footer col-lg-12">
              <span className="info">{jobs.company}</span>
              <span class="icon-heart-empty nofav"></span>
            </div>
          </div>
        </div>
      )
    })
  }

  handleDefault() {
    return (
      <div className="results">
        <div className="individual">
          <div className="ind-header">
            <p className="need-search">
              Do a search to have results, please...
            </p>
          </div>
        </div>
//>>>>>>> staging
      </div>
    );
  }


  render() {
    const { BringResults } = this.props;
    return BringResults ? this.handleRenderResults(BringResults) : this.handleDefault();
    
  }
}

export default Results;