import React from 'react';
import Project from '../components/Project';
import { motion } from 'framer-motion';

class Haws extends React.Component {
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
        <Project
          projectNumber="4"
          projectTitle="Haws"
          projectInfo="Parking Widget / Frontend / Developed @ KPS3"
          projectDescription="A fully custom WordPress site for a large hydration and emergency equipment manufacturer. This site is built to market products and get potential customers into the sales funnel for purchasing their equipment. As one of the backend developers on this project my primary role was to work with WP-API and get our custom Vue frontend hooked together."
          projectLink="https://www.hawsco.com/"
          projectImage="/src/assets/haws-project.png"
        />
      </motion.div>
    );
  }
}
 
export default Haws;