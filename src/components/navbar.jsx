import React, { Component } from "react";
import logo from "../logo.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class Navbar extends Component {
  state = {};
  render() {
    return (
      <div>
        <div>
          <a className="navbar-brand" href="/">
            <img src={logo} width="30" height="30" alt="" />
          </a>
        </div>
        <ul className="nav justify-content-center">
          <li className="nav-item active">
            <a className="nav-link" href="/">
              <FontAwesomeIcon icon={"home"} />
            </a>
          </li>
        </ul>
      </div>
    );
  }
}

export default Navbar;
