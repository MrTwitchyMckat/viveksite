import React, { Component } from "react";
import "./items.css";
//Import Expand Items
import ExpandOne from "./expanded/item-1-expand";

class ItemOne extends Component {
  state = {
    expanded: false
  };

  expandedClickHandler = () => {
    this.setState(prevState => {
      return { expanded: !prevState.expanded };
    });
  };

  closeClickHandler = () => {
    this.setState({ expanded: false });
  };

  render() {
    let expanded;

    if (this.state.expanded) {
      expanded = (
        <ExpandOne
          open={this.state.expanded}
          closeHandler={this.closeClickHandler}
        />
      );
    }
    return (
      <div
        onClick={this.expandedClickHandler}
        className="itemBox itemBox1 col-md-3"
      >
        <h1 className="">Effortless IT</h1>
        {expanded}
      </div>
    );
  }
}

export default ItemOne;
