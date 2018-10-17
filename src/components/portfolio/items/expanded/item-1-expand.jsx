import React, { Component } from "react";
import "./expanded.css";
import EffortlessMockup from "../../../../img/largeImg/effotless-mockup.png";

class ItemOneExpand extends Component {
  state = {};
  render() {
    return (
      <div className="container-fluid full-screen">
        <div className="col-lg-12 pad-t3">
          <h1 class="text-center red-text">
            EFFORTLESS <strong>IT</strong>
          </h1>
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
