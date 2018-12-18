import React, { Component } from "react";
import "./expanded.css";
import DreamCrafters from "../../../../img/largeImg/dreamcrafters.png";
import OCGlogo from "../../../../img/largeImg/OCG_LOGO.png";

import CloseButtonX from "./closeButtonX";

class ItemFiveExpanded extends Component {
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
            DREAM <strong>CRAFTERS</strong>
          </h1>
          <h3 className="ocgHeader">
            <em>Designed at</em>
          </h3>
          <img
            src={OCGlogo}
            className="img-fluid mx-auto d-block"
            alt="OCG Creative"
          />
          <img
            src={DreamCrafters}
            className="img-fluid mx-auto d-block pad-t3 pad-b3"
            alt="jensen electric mockup"
          />
          <a
            href="http://renodreamcrafters.com"
            rel="noopener noreffer"
            target="blank"
          >
            <h1 className="text-center bottom-link">
              WWW.RENODREAMCRAFTERS.COM
            </h1>
          </a>
          <div className="row">
            <div className="col-md-3">
              <br />
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

export default ItemFiveExpanded;
