import React, { Component } from "react";
import "./header.css";

class Header extends Component {
  state = {};
  render() {
    return (
      <div className="container-fluid no-pad">
        <div className="jumbotron jumbotron-fluid header-section">
          <div className="container">
            <div className="col-md-8 header-container">
              <h3 className="header-text text-center fade-in-left">
                Hi My name is
              </h3>
              <h1 className="header-text text-center fade-in-left">
                Vivek Bhardwaj
              </h1>
              <h4 className="header-text text-center fade-in-left">
                Designer | Developer
              </h4>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Header;
