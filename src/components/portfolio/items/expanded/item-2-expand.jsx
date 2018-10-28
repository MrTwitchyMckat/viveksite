import React, { Component } from "react";
import "./expanded.css";
import OCGlogo from "../../../../img/largeImg/OCG_LOGO.png";
import CloseButtonX from "./closeButtonX";
import JensenMockup from "../../../../img/largeImg/jensen-mockup.png";

class ItemTwoExpanded extends Component {
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
            JENSEN <strong>ELECTRIC</strong>
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
            src={JensenMockup}
            className="img-fluid mx-auto d-block pad-t3 pad-b3"
            alt="jensen electric mockup"
          />
          <a
            href="http://jensenelectricnv.com"
            rel="noopener noreffer"
            target="blank"
          >
            <h1 className="text-center bottom-link">
              WWW.JENSENELECTRICNV.COM
            </h1>
          </a>
          <div className="row">
            <div className="col-md-3">
              <br />
            </div>
            <div className="col-md-5 align-center">
              <p className="grey-text align-center">
                Designed using WordPress, Effortless IT was a website that came
                to me naturally. The gradient color theme as well as the font
                were pulled from the logo and business cards. This made
                development a breeze since there was really no guess work
                involved design-wise. From there graphics were made on a page by
                page basis and the site came together nicely. Just to add some
                flare the we used Typed JS on a few pages to add the{" "}
                <em>"technology vibe."</em>
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

export default ItemTwoExpanded;
