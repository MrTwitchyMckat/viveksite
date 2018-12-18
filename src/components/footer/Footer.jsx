import React, { Component } from "react";
import "./footer.css";
import Kimono from "../../img/largeImg/kimono-girl.png";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faEnvelope,
  faPhone,
  faArrowAltCircleUp
} from "@fortawesome/pro-solid-svg-icons";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

library.add(fab, faEnvelope, faPhone, faArrowAltCircleUp);

class Footer extends Component {
  state = {};
  render() {
    let currentYear = new Date().getFullYear();

    return (
      <div>
        <div className="container-fluid" id="contact">
          <div className="row">
            <div className="col-7 footer-text">
              <h1 className="intouch">
                Get <strong>in Touch</strong>
              </h1>
              <div className="col-md-6 offset-md-3 contact-section">
                <a
                  href="http://instagram.com/mrtwitchymckat"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline"
                >
                  <FontAwesomeIcon
                    icon={["fab", "instagram"]}
                    className="contact-icons"
                  />
                  <p className="contact-link">@mrtwitchymckat</p>
                </a>
                <a
                  href="mailto:vivekbhardwaj@nevada.unr.edu"
                  className="inline"
                >
                  <FontAwesomeIcon
                    icon={"envelope"}
                    className="contact-icons"
                  />
                  <p className="contact-link">vivekbhardwaj@nevada.unr.edu</p>
                </a>
                <a href="tel:+17752338282" className="inline">
                  <FontAwesomeIcon icon={"phone"} className="contact-icons" />
                  <p className="contact-link">775-233-8282</p>
                </a>
              </div>
              <div className="col-md-6 offset-md-3 copyright">
                <p>
                  Copyright {currentYear} Vivek Bhardwaj | All Rights Reserved
                </p>
              </div>
            </div>
            <div className="col-5">
              <img src={Kimono} style={{ height: 600 }} alt="yet" />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Footer;
