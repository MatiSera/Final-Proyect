import React, { Component } from 'react';
import JobResult from ',/JobResult';

class Results extends Component {
  render() {
    const jobList = this.props.jobs.map((job) => {
      <JobResult
        key = {job.id}
        job = {job}
        handleFav = {this.props.handleFav}
      />
    };
  
    return (
      <div className="results-container">
        <ul>
          {jobList}
        </ul>
      </div>
    );
  }
}

export default Results;