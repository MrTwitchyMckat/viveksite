import React, { Component } from "react";
import "./App.css";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faFolder } from "@fortawesome/pro-regular-svg-icons";
import { faHome } from "@fortawesome/pro-solid-svg-icons";
import Navbar from "./components/navbar/navbar";
import Header from "./components/header/header";
import EmptySpace from "./components/emptySpace";

library.add(faFolder, faHome);

class App extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <Header />
        <EmptySpace />
      </div>
    );
  }
}

export default App;
