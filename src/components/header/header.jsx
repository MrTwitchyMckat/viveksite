import React, { Component } from "react";
import "./header.css";

class Header extends Component {
  state = {};
  render() {
    return (
      <div className="container-fluid">
        <div className="jumbotron jumbotron-fluid header-section">
          <div className="row">
            <div className="col-md-5">
              <h1>Hello</h1>
            </div>
            <div className="col-md-7" />
          </div>
        </div>
      </div>
    );
  }
}

export default Header;
