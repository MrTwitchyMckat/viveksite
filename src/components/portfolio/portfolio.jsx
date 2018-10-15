import React, { Component } from "react";
import "./portfolio.css";
import ItemOne from "./items/item-1";
import ItemTwo from "./items/item-2";
import ItemThree from "./items/item-3";
import ItemFour from "./items/item-4";
import ItemFive from "./items/item-5";
import ItemSix from "./items/item-6";
import ItemSeven from "./items/item-7";
import ItemEight from "./items/item-8";

class Portfolio extends Component {
  state = {
    modalOpen: false
  };

  render() {
    return (
      <div
        style={{
          paddingTop: 10,
          paddingBottom: 10
        }}
        className="hidden-overflow"
      >
        <div className="container pad-b3">
          <div className="row">
            <div className="col-md-12">
              <h2 className="my-work text-center tracking-in-expand">
                My Work
              </h2>
            </div>
          </div>
        </div>
        <div className="row hidden-overflow">
          <ItemOne />
          <ItemTwo />
          <ItemThree />
          <ItemFour />
          <ItemFive />
          <ItemSix />
          <ItemSeven />
          <ItemEight />
        </div>
      </div>
    );
  }
}

export default Portfolio;
