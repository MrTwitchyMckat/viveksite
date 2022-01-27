import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// CSS
import './global.scss'

// Components
import Loading from './components/Loading';
import Nav from './components/Nav';
import Footer from './components/Footer';

// Routes
import Home from './routes/Home';
import Heartbreakers from './routes/Heartbreakers';

ReactDOM.render(
  <React.StrictMode>
    <Nav />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="heartbreakers" element={<Heartbreakers/>}/>
        </Routes>
      </BrowserRouter>
    <Footer />
  </React.StrictMode>,
  document.getElementById('root')
)
