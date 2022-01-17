import React from 'react'
import ReactDOM from 'react-dom'
import './global.scss'

// Components
import Loading from './components/Loading';
import Nav from './components/Nav';
import HomepageHeader from './components/HomepageHeader';
import ProjectCard from './components/ProjectCard';
import Footer from './components/Footer';

ReactDOM.render(
  <React.StrictMode>
    <Loading />
    <Nav />
    <HomepageHeader />
    <ProjectCard
      link="https://heartbreakers.io"
      title="Heartbreakers"
      image="src/assets/hb-card.png"
      />
    <ProjectCard
      link="https://dennisuniform.com"
      title="Dennis Uniform"
      image="src/assets/dennis-card.png"
      delay=".7s"
      />
    <ProjectCard
      link="https://renoairport.com"
      title="Reno Airport"
      image="src/assets/rtaa-card.png"
      delay=".2s"
      />
    <ProjectCard
      link="https://hawsco.com"
      title="Haws Co"
      image="src/assets/haws-card.png"
      delay="1s"
      />
    <Footer />
  </React.StrictMode>,
  document.getElementById('root')
)
