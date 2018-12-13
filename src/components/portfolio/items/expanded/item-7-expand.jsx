import React, { Component } from "react";
import "./expanded.css";
import Sorry1 from "../../../../img/largeImg/sorrycrewgif.gif";
import Sorry2 from "../../../../img/smallImg/sorry-crew.png";
import CloseButtonX from "./closeButtonX";

class ItemSevenExpanded extends Component {
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
            SORRY <strong>CREW</strong>
          </h1>
          <img
            src={Sorry2}
            className="img-fluid mx-auto d-block pad-t3 pad-b3"
            alt="Sorry Crew"
          />
          <img
            src={Sorry1}
            className="img-fluid mx-auto d-block pad-t3 pad-b3"
            alt="Sorry Crew"
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

export default ItemSevenExpanded;
