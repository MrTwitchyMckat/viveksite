import React from 'react'
import ReactDOM from 'react-dom'
import './global.scss'

// Components
import Loading from './components/Loading';
import Nav from './components/Nav';
import HomepageHeader from './components/HomepageHeader';
import ProjectCard from './components/ProjectCard';

ReactDOM.render(
  <React.StrictMode>
    <Loading />
    <Nav />
    <HomepageHeader />
    <ProjectCard link="https://heartbreakers.io" title="Heartbreakers" image="src/assets/hb-card.png" />
    <ProjectCard link="https://dennisuniform.com" title="Dennis Uniform" image="src/assets/dennis-card.png" />
    <ProjectCard link="https://renoairport.com" title="Reno Airport" image="src/assets/rtaa-card.png" />
    <ProjectCard link="https://hawsco.com" title="Haws Co" image="src/assets/haws-card.png" />
  </React.StrictMode>,
  document.getElementById('root')
)
