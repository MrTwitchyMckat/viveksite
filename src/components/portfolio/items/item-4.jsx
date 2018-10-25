import React, { Component } from "react";
import "./items.css";
import ExpandFour from "./expanded/item-4-expand";

class ItemFour extends Component {
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
    let expandedFour;
    
    if(this.state.expanded) {
      expandedFour=<ExpandFour closeHandler={this.closeClickHandler}/>;
    }

    return (
      <div className="itemBox itemBox4 col-md-3" onClick={this.expandClickHandler}>
        <h1 className="">Keep Truckee Meadows Beautiful</h1>
        {expandedFour}
      </div>
    );
  }
}

export default ItemFour;
