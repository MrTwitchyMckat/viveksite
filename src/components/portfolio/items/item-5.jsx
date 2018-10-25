import React, { Component } from "react";
import "./items.css";
import ExpandFive from "./expanded/item-5-expand";

class ItemFive extends Component {
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
    let expandedFive;

    if(this.state.expanded) {
      expandedFive=<ExpandFive closeHandler = {this.closeClickHandler}/>;
    }

    return (
      <div className="itemBox itemBox5 col-md-3" onClick={this.expandClickHandler}>
        <h1 className="">Dream Crafters</h1>
        {expandedFive}
      </div>
    );
  }
}

export default ItemFive;
