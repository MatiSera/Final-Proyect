//Import React
import React, { Component } from 'react';


class Results extends Component {
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
      </div>
    )
  }


  render() {
    const { BringResults } = this.props;
    return BringResults ? this.handleRenderResults(BringResults) : this.handleDefault();
    
  }
}

export default Results;