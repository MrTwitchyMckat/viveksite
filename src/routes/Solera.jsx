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
          projectNumber="1"
          projectTitle="Solera"
          projectInfo="WordPress Site / Frontend | Backend / Developed @ KPS3"
          projectDescription="Solera.com is a dynamic marketing website powered by WordPress and a customized version of Gutenberg with ACF (Advanced Custom Fields). Designed for long-term scalability, the website effectively highlights Solera's groundbreaking automotive platform. In my role, I contributed equally to both backend and frontend development, creating frontend components and interactions, and seamlessly integrating custom Gutenberg components using ACF on the backend."
          projectLink="https://www.solera.com/"
          projectImage="/images/solera-project.png"
        />
      </motion.div>
    );
  }
}
 
export default Fusion;