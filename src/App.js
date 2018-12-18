import React, { Component } from "react";
import "./App.css";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faFolder } from "@fortawesome/pro-regular-svg-icons";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { faHome, faEnvelope, faPhone } from "@fortawesome/pro-solid-svg-icons";
import Navbar from "./components/navbar/navbar";
import Header from "./components/header/header";
import Portfolio from "./components/portfolio/portfolio";
import About from "./components/about/about";
import Footer from "./components/footer/Footer";
import ScrollToTop from "./components/totop/totop";

library.add(faFolder, faHome, faEnvelope, faPhone, fab);

class App extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <Header />
        <Portfolio />
        <About />
        <Footer />
        <ScrollToTop />
      </div>
    );
  }
}

export default App;
