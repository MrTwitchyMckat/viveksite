import React, { Component } from "react";
import logo from "../../logo.svg";

class LogoHeader extends Component {
  render() {
    return (
      <div>
        <div className="container">
          <div className="row">
            <div className="col-md-12 mx-auto">
              <a className="" href="/">
                <img
                  className="mx-auto d-block logo"
                  src={logo}
                  width="60"
                  height="60"
                  alt=""
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default LogoHeader;
