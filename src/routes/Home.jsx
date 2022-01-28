import React from 'react';
import { motion } from 'framer-motion';

// Components
import HomepageHeader from '../components/HomepageHeader';
import ProjectCard from '../components/ProjectCard';

class Home extends React.Component {
  render() { 
    const pageTransition = {
      in: {
        opacity: 1
      },
      out: {
        opacity: 0
      }
    }
    return (
      <motion.div initial="out" animate="in" exit="out" variants={pageTransition}>
        <HomepageHeader />
        <ProjectCard
          link="/heartbreakers/"
          title="Heartbreakers"
          image="/images/hb-card.png"
          />
        <ProjectCard
          link="/dennis-uniform/"
          title="Dennis Uniform"
          image="/images/dennis-card.png"
          delay=".7s"
          />
        <ProjectCard
          link="/reno-airport/"
          title="Reno Airport"
          image="/images/rtaa-card.png"
          delay=".2s"
          />
        <ProjectCard
          link="/haws"
          title="Haws Co"
          image="/images/haws-card.png"
          delay="1s"
          />
      </motion.div>
    );
  }
}
 
export default Home;