import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';

// Routes
import Home from './routes/Home';
import Heartbreakers from './routes/Heartbreakers';
import DennisUniform from './routes/DennisUniform';
import RenoAirport from './routes/RenoAirport';
import Haws from './routes/Haws';
import Fusion from './routes/Fusion';
import Solera from './routes/Solera';

class AnimatedRoutes extends React.Component {
  render() { 
    return (
      <AnimatePresence exitBeforeEnter>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="heartbreakers" element={<Heartbreakers/>}/>
          <Route path="dennis-uniform" element={<DennisUniform/>}/>
          <Route path="reno-airport" element={<RenoAirport/>}/>
          <Route path="haws" element={<Haws/>}/>
          <Route path="solera" element={<Solera/>}/>
          <Route path="fusion" element={<Fusion/>}/>
        </Routes>
      </AnimatePresence>
    );
  }
}
 
export default AnimatedRoutes;