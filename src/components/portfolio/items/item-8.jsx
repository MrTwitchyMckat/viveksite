import React, { Component } from "react";
import "./items.css";
import ExpandEight from "./expanded/item-8-expand";

class ItemEight extends Component {
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
    let expandedEight;
    if(this.state.expanded) {
      expandedEight=<ExpandEight closeHandler={this.closeClickHandler}/>;
    }

    return (
      <div className="itemBox itemBox8 col-md-3" onClick={this.expandClickHandler}>
        <h1 className="">Calling All Artists</h1>
        {expandedEight}
      </div>
    );
  }
}

export default ItemEight;
