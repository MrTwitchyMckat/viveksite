import React, { Component } from "react";
import "./expanded.css";
import EffortlessMockup from "../../../../img/largeImg/effotless-mockup.png";
import OCGlogo from "../../../../img/largeImg/OCG_LOGO.png";

class ItemOneExpand extends Component {
  state = {};
  render() {
    return (
      <div className="full-screen">
        <div className="col-lg-12 pad-t3">
          <h1 class="text-center red-text">
            EFFORTLESS <strong>IT</strong>
          </h1>
          <a href="https://www.ocgcreative.com"  rel="noopener noreferrer" target="_blank"><img src={OCGlogo} className="img-fluid mx-auto d-block" alt="OCG Creative"/></a>
          <img
            src={EffortlessMockup}
            class="img-fluid mx-auto d-block"
            alt="effortless"
          />
        </div>
      </div>
    );
  }
}

export default ItemOneExpand;
