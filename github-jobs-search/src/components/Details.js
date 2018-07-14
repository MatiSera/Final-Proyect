import React, { Component } from 'react';

class Details extends Component {
  render() {
    return(
      <div className="jobs-container">
        <div className="job-details">
          <div className="details-path">
            <p className="path-search">
            Full Time/ Location
            </p>
          </div>
          <div className="details-title">
            <h1 className="title bold">
              Job title
            </h1>
          </div>
          <div className="details-info grid-container">
            <p className="info grid-item">
            Lorem ipsum dolor sit amet consectetur adipiscing elit scelerisque et suscipit nisi mus, accumsan tortor suspendisse metus hendrerit dapibus convallis cum donec vitae dignissim, bibendum justo proin dictum felis interdum sodales cubilia inceptos arcu lobortis. Hendrerit nostra magna mauris torquent faucibus, parturient luctus euismod penatibus rhoncus malesuada, himenaeos etiam nec taciti. Non vehicula senectus mi eget netus mollis fames, metus lacinia suscipit tortor torquent facilisis iaculis aliquet, himenaeos tempus enim class fusce tempor. Elementum inceptos himenaeos tempus nibh egestas placerat pellentesque, aptent purus sodales pretium dapibus turpis blandit montes, posuere magna cras iaculis natoque litora.
            </p>
            <div className="img-details grid-item">
              <span className="company bold">
                Company
              </span>
              <img src="" className="company-img" />
              <a href="#" >Company Url </a>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Details;