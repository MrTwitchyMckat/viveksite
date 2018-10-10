import React, { Component } from "react";
import "./portfolio.css";

class Portfolio extends Component {
  state = {};
  render() {
    return (
      <div>
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <h2 className="my-work text-center tracking-in-expand">
                My Work
              </h2>
            </div>
            <div className="col-md-12" />
          </div>
        </div>
      </div>
    );
  }
}

export default Portfolio;
