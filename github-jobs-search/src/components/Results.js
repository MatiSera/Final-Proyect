import React, { Component } from 'react';

class Results extends Component {
  render() {
    return (
      <section className="results-container">
        <div className="individual">
          <div className="ind-header grid-container">
            <a href="#" className="job-title">Job Title</a>
            <span className="locate">Location</span>
          </div>
          <div className="ind-footer">
            <span className="info">Company - FullTime</span>
            <span class="icon-heart nofav"></span>
          </div>
        </div>
      </section>
    )
  }
}

export default Results;