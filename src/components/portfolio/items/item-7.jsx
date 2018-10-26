import React, { Component } from "react";
import "./items.css";
import ExpandSeven from "./expanded/item-7-expand";

class ItemSeven extends Component {
  state = {
    expanded: false
  };

  expandClickHandler = () => {
    this.setState(prevState => {
      return({expanded: !prevState.expanded});
    });
  };

  closeClickHandler = () =>{
    this.setState({expanded: false});
  }
  render() {
    let expandedSeven;

    if(this.state.expanded) {
      expandedSeven = <ExpandSeven closeHandler={this.closeClickHandler}/>;
    }

    return (
      <div className="itemBox itemBox7 col-md-3" onClick={this.expandClickHandler}>
        <h1 className="">Sorry Crew</h1>
        {expandedSeven}
      </div>
    );
  }
}

export default ItemSeven;
