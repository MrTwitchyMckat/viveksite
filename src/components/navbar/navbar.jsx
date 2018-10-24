import React, { Component } from "react";
import "./navbar.css";
import LogoHeader from "./logo";
import Resume from "../../resume/VivekBhardwajDesignResume.pdf";

class Navbar extends Component {
  state = {};
  render() {
    return (
      <div className="container top-menu">
        <LogoHeader />

        <nav className="nav nav-fill pad-t2">
          <a className="nav-item nav-link" href="/">
            Home
          </a>
          <a className="nav-item nav-link" href="/">
            Portfolio
          </a>
          <a className="nav-item nav-link" href="/">
            About
          </a>
          <a className="nav-item nav-link" href={Resume} target="_blank" rel="noopener norefferer">
            Resume
          </a>
          <a className="nav-item nav-link" href="/">
            Contact
          </a>
        </nav>
      </div>
    );
  }
}

export default Navbar;
