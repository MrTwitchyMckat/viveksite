import React, { Component } from "react";
import logo from "../logo.svg";
import MobileMenuToggle from "./MobileMenu/mobileMenuToggle";

class Navbar extends Component {
  state = {};
  render() {
    return (
      <div>
        <div>
          <MobileMenuToggle />
        </div>
        <div className="container">
          <ul className="nav justify-content-center">
            <li>
              <a className="nav navbar-brand justify-content-center" href="/">
                <img src={logo} width="60" height="60" alt="" />
              </a>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

export default Navbar;
