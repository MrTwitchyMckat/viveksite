import React, { Component } from "react";
import "./items.css";
import ExpandFive from "./expanded/item-6-expand";

class ItemSix extends Component {
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
    let expandedSix;
    if(this.state.expanded) {
      expandedSix=<ExpandFive closeHandler={this.closeClickHandler}/>;
    }
    return (
      <div className="itemBox itemBox6 col-md-3" onClick={this.expandClickHandler}>
        <h1 className="">Nevada System of Higher Education</h1>
        {expandedSix}
      </div>
    );
  }
}

export default ItemSix;
