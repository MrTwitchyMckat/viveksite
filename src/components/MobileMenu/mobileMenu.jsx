import React, { Component } from "react";
import "./mobileMenu.css";

class MobileMenu extends Component {
  state = {};
  render() {
    return (
      <div className="container mobileMenuContainer">
        <div className="row">
          <ul>
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/">Other Home</a>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

export default MobileMenu;
