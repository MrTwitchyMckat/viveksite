import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom';

// CSS
import './global.scss'

// Components
import Loading from './components/Loading';
import Nav from './components/Nav';
import Footer from './components/Footer';

// Animated Route
import AnimatedRoutes from './AnimatedRoutes';


ReactDOM.render(
  <React.StrictMode>
    <Nav />
      <BrowserRouter>
        <AnimatedRoutes />
      </BrowserRouter>
    <Footer />
  </React.StrictMode>,
  document.getElementById('root')
)
