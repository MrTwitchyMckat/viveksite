import React from 'react'
import ReactDOM from 'react-dom'
import './global.scss'

// Components
import Loading from './components/Loading';
import Nav from './components/Nav';
import HomepageHeader from './components/HomepageHeader';

ReactDOM.render(
  <React.StrictMode>
    <Loading />
    <Nav />
    <HomepageHeader />
  </React.StrictMode>,
  document.getElementById('root')
)
