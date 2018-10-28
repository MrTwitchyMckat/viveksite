import React, { Component } from "react";
import "./expanded.css";
import EffortlessMockup from "../../../../img/largeImg/effotless-mockup.png";
import OCGlogo from "../../../../img/largeImg/OCG_LOGO.png";
import EffortlessLogo from "../../../../img/largeImg/Effortless_IT_Consulting_Logo_RGB.png";

import CloseButtonX from "./closeButtonX";

class ItemOneExpand extends Component {
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
            EFFORTLESS <strong>IT</strong>
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
            src={EffortlessMockup}
            className="img-fluid mx-auto d-block"
            alt="effortless"
          />
          <img
            src={EffortlessLogo}
            className="img-fluid mx-auto d-block pad-t3 pad-b3"
            alt="effortless webdesign"
          />
          <a
            href="http://effortlessit.xyz"
            rel="noopener noreffer"
            target="blank"
          >
            <h1 className="text-center bottom-link">WWW.EFFORTLESSIT.XYZ</h1>
          </a>
          <div className="row justify-content-center">
            <div className="col-md-3">
              <br />
            </div>
            <div className="col-md-5 align-center">
              <p className="grey-text align-center">
                Effortless IT was an IT startup who needed fresh branding, and a
                website that show cased their tech abilities. <br />
                Working with a team member, we created stylish branding and a
                site that followed. Built using WordPress the site is fully
                responsive, and optimized for quicker load times. We also used
                the Typed.js library to add flare to the site. The site ended up
                being a huge hit with the client, and we were taken on for more
                work after.
              </p>
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

export default ItemOneExpand;
