import React, { Component } from "react";
import "./expanded.css";
import img1 from "../../../../img/smallImg/effortless-small.jpg";


class ItemOneExpand extends Component {
  state = {};
  render() {
    return(
      <div className="container-fluid full-screen">
      <div className="col-lg-12">
        <h1 class="white-text text-center">EFFORTLESS IT</h1>
        <img src={img1} class="text-center" alt="effortless"/>
      </div>
      </div>
    );
  }
}

export default ItemOneExpand;
