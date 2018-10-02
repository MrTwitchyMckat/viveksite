import React, { Component } from "react";
import logo from '../logo.svg';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';


class Navbar extends Component {
  state = {};
  render() {
    return (
      <nav className="navbar navbar-sticky navbar-dark bg-dark">
       <div className="container">
          <a className="navbar-brand" href="/">
            <img src={logo} width="30" height="30" alt=""/>
          </a>
          <div className="" id="navbarNav">
              <ul className="navbar-nav">
                <li className="nav-item active">
                <a className="nav-link" href="/"><FontAwesomeIcon icon={["far", "home"]}/> Home <span class="sr-only">(current)</span></a>
                </li>
              </ul>
            </div>
        </div>
      </nav>
    );
  }
}

export default Navbar;
