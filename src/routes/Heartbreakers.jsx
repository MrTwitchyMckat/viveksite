import React from 'react';
import Project from '../components/Project';
import { motion } from 'framer-motion';
class Heartbreakers extends React.Component {
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
          projectNumber="3"
          projectTitle="Heartbreakers"
          projectInfo="Shopify Site / Design | Frontend | Backend"
          projectDescription="A site built to market and sell custom designed streetwear clothing. The site is designed and developed for a mobile-first experience. Users are guided either directly to a product from the homepage, or they can browse through a collection of clothing or art."
          projectLink="https://heartbreakers.io"
          projectImage="/images/heartbreakers-project.png"
        />
      </motion.div>
    );
  }
}
 
export default Heartbreakers;