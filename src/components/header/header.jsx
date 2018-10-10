import React, { Component } from "react";
import "./header.css";

class Header extends Component {
  state = {};
  render() {
    return (
      <div className="container-fluid no-pad">
        <div className="jumbotron jumbotron-fluid header-section">
          <div className="container">
            <div className="col-md-5">
            <h3 className="header-text text-center">Hi My name is</h3>
              <h1 className="header-text text-center">Vivek Bhardwaj</h1>
            </div>
            <div className="col-md-7" />
            </div>
        </div>
      </div>
    );
  }
}

export default Header;
