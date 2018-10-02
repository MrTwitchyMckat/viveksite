import React, { Component } from "react";
import logo from '../logo.svg';

class Navbar extends Component {
  state = {};
  render() {
    return (
      <nav className="navbar navbar-sticky navbar-dark bg-dark">
        <a className="navbar-brand" href="/">
          <img src={logo} width="30" height="30" alt=""/>
         </a>
         <div className="" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item active">
                <a className="nav-link" href="/">Home <span class="sr-only">(current)</span></a>
              </li>
            </ul>
          </div>
      </nav>
    );
  }
}

export default Navbar;
