import React, { Component } from "react";
import "./mobileMenu.css";

class MobileMenuToggle extends Component {
  state = {};
  render() {
    return (
      <button className="toggle-button">
        <span className="icon-bar" />
        <span className="icon-bar" />
        <span className="icon-bar" />
      </button>
    );
  }
}

export default MobileMenuToggle;
