import React, { Component } from "react";
import "./App.css";
import {library} from '@fortawesome/fontawesome-svg-core';
import {faFolder, faHome} from '@fortawesome/pro-regular-svg-icons';
import Navbar from "./components/navbar";
import MobileMenu from './components/mobileMenu';

library.add(faFolder, faHome);



class App extends Component {
  render() {
    return (
      <div>
      <Navbar />
      <MobileMenu />
    </div>
    );
  }
}

export default App;
