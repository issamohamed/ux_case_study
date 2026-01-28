import React from 'react';
import { Routes, Route } from 'react-router-dom';
import AureliaHome from './pages/Home';
import LandingPage from './pages/LandingPage';
import DesignLanguage from './pages/DesignLanguage';

function App() {
  return (
    <Routes>
      <Route path="/" element={<AureliaHome />} />
      <Route path="/landing" element={<LandingPage />} />
      <Route path="/design-language" element={<DesignLanguage />} />
    </Routes>
  );
}

export default App;
