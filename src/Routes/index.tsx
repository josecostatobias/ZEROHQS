import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from '../Screens/Home';
import ZeroHQs from '../Screens/ZeroHQs';
import ZeroWorldPower from '../Screens/ZeroWorldPower';
import ZeroClaySculpture from '../Screens/ZeroClaySculpture';
import GlassPixelEngine from '../Screens/GlassPixelEngine';

const AppRoutes: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/zerohqs" element={<ZeroHQs />} />
        <Route path="/zeroworldpower" element={<ZeroWorldPower />} />
        <Route path="/zeroclaysculpture" element={<ZeroClaySculpture />} />
        <Route path="/glasspixelengine" element={<GlassPixelEngine />} />
      </Routes>
    </Router>
  );
}

export default AppRoutes;