import React, { Component } from "react";
import "./navbar.css";
import LogoHeader from "./logo";

class Navbar extends Component {
  state = {};
  render() {
    return (
      <div className="container top-menu">
        <LogoHeader />

        <nav className="nav nav-fill pad-t2">
          <a class="nav-item nav-link" href="/">
            Home
          </a>
          <a class="nav-item nav-link" href="/">
            Portfolio
          </a>
          <a class="nav-item nav-link" href="/">
            About
          </a>
          <a class="nav-item nav-link" href="/">
            Contact
          </a>
        </nav>
      </div>
    );
  }
}

export default Navbar;
