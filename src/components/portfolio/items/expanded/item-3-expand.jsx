import React, { Component } from "react";
import "./expanded.css";
import Bmrh from "../../../../img/largeImg/buymyrenohome.png";

import CloseButtonX from "./closeButtonX";

class ItemThreeExpanded extends Component {
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
            BUY MY <strong>RENO HOME</strong>
          </h1>
          <img
            src={Bmrh}
            className="img-fluid mx-auto d-block"
            alt="effortless"
          />
          <a
            href="https://buymyrenohome.com/"
            rel="noopener noreffer"
            target="blank"
          >
            <h1 className="text-center bottom-link">WWW.BUYMYRENOHOME.COM</h1>
          </a>
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

export default ItemThreeExpanded;
