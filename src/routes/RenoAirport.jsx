import { motion } from 'framer-motion';
import React from 'react';
import Project from '../components/Project';

class RenoAirport extends React.Component {
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
          projectNumber="5"
          projectTitle="Reno Airport"
          projectInfo="Parking Widget / Frontend / Developed @ KPS3"
          projectDescription="A widget that displays live parking data for the various parking garages at Reno Tahoe International airport. This allows users to get a quick glance at parking availability and allows them to plan accordingly."
          projectLink="https://www.renoairport.com/"
          projectImage="/images/rtaa-project.png"
        />
      </motion.div>
    );
  }
}
 
export default RenoAirport;