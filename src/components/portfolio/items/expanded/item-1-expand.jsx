import React, { Component } from "react";
import "./expanded.css";
import EffortlessMockup from "../../../../img/largeImg/effotless-mockup.png";
import OCGlogo from "../../../../img/largeImg/OCG_LOGO.png";
import EffortlessLogo from "../../../../img/largeImg/Effortless_IT_Consulting_Logo_RGB.png";
import EffortlessScroll from "../../../../img/largeImg/effortless-home-scroll.gif";

class ItemOneExpand extends Component {
  state = {};
  render() {
    return (
      <div className="full-screen">
        <div className="col-lg-12 pad-t3">
          <h1 class="text-center red-text">
            EFFORTLESS <strong>IT</strong>
          </h1>
          <h3 className="ocgHeader">
            <em>Designed at</em>
          </h3>
          <a
            href="https://www.ocgcreative.com"
            rel="noopener noreferrer"
            target="_blank"
          >
            <img
              src={OCGlogo}
              className="img-fluid mx-auto d-block"
              alt="OCG Creative"
            />
          </a>
          <img
            src={EffortlessMockup}
            class="img-fluid mx-auto d-block"
            alt="effortless"
          />
          <img
            src={EffortlessLogo}
            className="img-fluid mx-auto d-block"
            alt="effortless webdesign"
          />
          <img
            src={EffortlessScroll}
            className="img-fluid mx-auto d-block"
            alt="effortless webdesign"
          />
          <h1>
            <a
              href="http://www.effortlessit.xyz"
              target="_blank"
              rel="noopener noreferrer"
            >
              {" "}
              WWW.EFFORTLESSIT.XYZ
            </a>
          </h1>
        </div>
      </div>
    );
  }
}

export default ItemOneExpand;
