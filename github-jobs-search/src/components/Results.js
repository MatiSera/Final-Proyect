//Import React
import React, { Component } from 'react';


class Results extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.handleClickFavs = this.handleClickFavs.bind(this);
    this.state = {
        isFavorite: false
    }

  }

  handleRenderResults(BringResults) {
    return BringResults.map(jobs => {
      return (
        <div className="results">
          <div className="individual">
            <div className="ind-header col-lg-12">
              <a 
                href="#job-details" 
                className="job-title"
                name="job_tittle"
                onClick={(e) => this.handleClick(jobs, e)}
              >
                <i class="fa fa-info-circle"></i> {jobs.title} 
              </a>
              <span className="locate">{jobs.location}</span>
            </div>
            <div className="ind-footer col-lg-12">
              <span className="info">{jobs.company}</span>
              <span 
                class="icon-heart-empty" 
                onClick={(e) => this.handleClickFavs(jobs, e)} 
              >

                </span>
            </div>
          </div>
        </div>
      )
    })
  }
  handleClickFavs (job, e) {
    this.props.handleFav(job, this.state.isFavorite);
    this.setState(prevState => {
        isFavorite: !prevState.isFavorite
    });
  }
  handleClick = (job, e) => { 
    if (e.target.name === "job_tittle") {
        this.props.handleDetails(job);
    }
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
    );
  }


  render() {
    const { BringResults } = this.props;
    return BringResults ? this.handleRenderResults(BringResults) : this.handleDefault();
    
  }
}

export default Results;