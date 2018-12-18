import React, { Component } from "react";
import "./totop.css";
import AnchorLink from "react-anchor-link-smooth-scroll";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faChevronUp } from "@fortawesome/pro-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

library.add(faChevronUp);

class ScrollToTop extends Component {
  render() {
    return (
      <AnchorLink href="#top" class="totopbutton">
        <FontAwesomeIcon icon={"chevron-up"} />
      </AnchorLink>
    );
  }
}

export default ScrollToTop;
