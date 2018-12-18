import React, { Component } from "react";
import "./navbar.css";
import LogoHeader from "./logo";
import Resume from "../../resume/VivekBhardwajDesignResume.pdf";
import AnchorLink from "react-anchor-link-smooth-scroll";

class Navbar extends Component {
  state = {};
  render() {
    return (
      <div className="container top-menu" id="top">
        <LogoHeader />

        <nav className="nav nav-fill pad-t2">
          <a className="nav-item nav-link" href="/">
            Home
          </a>
          <AnchorLink className="nav-item nav-link" href="#portfolio">
            Portfolio
          </AnchorLink>
          <AnchorLink className="nav-item nav-link" href="#about">
            About
          </AnchorLink>
          <a
            className="nav-item nav-link"
            href={Resume}
            target="_blank"
            rel="noopener norefferer"
          >
            Resume
          </a>
          <AnchorLink className="nav-item nav-link" href="#contact">
            Contact
          </AnchorLink>
        </nav>
      </div>
    );
  }
}

export default Navbar;
