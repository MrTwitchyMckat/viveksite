import React, { Component } from "react";
import "./items.css";
import ExpandTwo from "./expanded/item-2-expand";

class ItemTwo extends Component {
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
    let expandTwo;
    
    if(this.state.expanded) {
      expandTwo = <ExpandTwo closeBoi={this.closeClickHandler}/>
    }

    return (
      <div className="itemBox itemBox2 col-md-3" onClick={this.expandClickHandler}>
        <h1 className="">Jensen Electric</h1>
        {expandTwo}
      </div>
    );
  }
}

export default ItemTwo;
