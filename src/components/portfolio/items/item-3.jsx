import React, { Component } from "react";
import "./items.css";
import ExpandThree from "./expanded/item-3-expand";

class ItemThree extends Component {
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
    let expandedThree;
    if(this.state.expanded) {
      expandedThree = <ExpandThree closeHandler={this.closeClickHandler}/>;
    }
    return (
      <div className="itemBox itemBox3 col-md-3" onClick={this.expandClickHandler}>
        <h1 className="">Buy My Reno Home</h1>
        {expandedThree}
      </div>
    );
  }
}

export default ItemThree;
