import React from 'react';
import { motion } from 'framer-motion';
// Components
import Project from '../components/Project';


class Fusion extends React.Component {
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
          projectNumber="2"
          projectTitle="Fusion Risk Management"
          projectInfo="WordPress Site / Frontend | Backend / Developed @ KPS3"
          projectDescription="A marketing site for Fusion, built in WordPress using a fully custom integration of Elementor. Our goal was to showcase the comprehensive risk management solutions offered by the company using a seamless and intuitive user experience. My primary role was to help build out the custom frontend using HTML, SCSS, and JavaScript. However I also helped with the backend integration of the custom Elementor components with the frontend. "
          projectLink="https://www.fusionrm.com/"
          projectImage="/images/fusion-project.png"
        />
      </motion.div>
    );
  }
}
 
export default Fusion;