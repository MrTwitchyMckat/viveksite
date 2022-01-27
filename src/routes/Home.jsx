import React from 'react';

// Components
import HomepageHeader from '../components/HomepageHeader';
import ProjectCard from '../components/ProjectCard';

class Home extends React.Component {
  render() { 
    return (
      <React.Fragment>
        <HomepageHeader />
        <ProjectCard
          link="/heartbreakers"
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
      </React.Fragment>
    );
  }
}
 
export default Home;