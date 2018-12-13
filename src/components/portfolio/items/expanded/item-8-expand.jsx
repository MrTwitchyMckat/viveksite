import React, { Component } from "react";
import "./expanded.css";
import Caa from "../../../../img/largeImg/POSTER.jpg";

import CloseButtonX from "./closeButtonX";

class ItemEightExpanded extends Component {
  render() {
    let fullScreenClasses = "full-screen";
    if (this.props.expanded) {
      fullScreenClasses = "full-screen open";
    }
    return (
      <div className={fullScreenClasses}>
        <div className="col-lg-12 pad-t3">
          <div className="col-md-12 text-center">
            <CloseButtonX onClick={this.props.closeHandler} />
          </div>
          <h1 className="text-center red-text pad-t2">
            CALLING ALL <strong>ARTISTS</strong>
          </h1>
          <img
            src={Caa}
            className="img-fluid mx-auto d-block pad-t3 pad-b3"
            alt="Calling All Artists"
          />
          <div className="row">
            <div className="col-md-3">
              <br />
            </div>
            <div className="col-md-5">
              <p className="grey-text" />
            </div>
            <div className="col-md-3">
              <br />
            </div>
          </div>
          <div className="col-md-12 text-center pad-t4 pad-b4">
            <CloseButtonX onClick={this.props.closeHandler} />
          </div>
        </div>
      </div>
    );
  }
}

export default ItemEightExpanded;
