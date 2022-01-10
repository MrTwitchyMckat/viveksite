import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import './global.scss'

// Components
import Loading from './components/Loading';
import Nav from './components/Nav';

ReactDOM.render(
  <React.StrictMode>
    <Loading />
    <Nav />
  </React.StrictMode>,
  document.getElementById('root')
)
