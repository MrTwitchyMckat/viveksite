import React from 'react';
import { motion } from 'framer-motion';
// Components
import Project from '../components/Project';


class DennisUniform extends React.Component {
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
          projectTitle="Dennis Uniform"
          projectInfo="Shopify Site / Backend / Developed @ KPS3"
          projectDescription="A custom Shopify site built for the leading school uniform seller in the nation. As a backend developer on this project my role was to bridge Shopify’s Liquid with our custom frontend written in Vue."
          projectLink="https://www.dennisuniform.com/"
          projectImage="/images/dennis-project.png"
        />
      </motion.div>
    );
  }
}
 
export default DennisUniform;