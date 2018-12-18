import React, { Component } from "react";
import "./totop.css";
import AnchorLink from "react-anchor-link-smooth-scroll";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faArrowAltCircleUp } from "@fortawesome/pro-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

library.add(faArrowAltCircleUp);

class ScrollToTop extends Component {
  render() {
    return (
      <AnchorLink href="#top" class="totopbutton">
        <FontAwesomeIcon icon={"arrow-alt-circle-up"} />
      </AnchorLink>
    );
  }
}

export default ScrollToTop;
