import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import CaseStudyExhibition from './pages/CaseStudyExhibition';
import LandingPage from './pages/LandingPage';
import Dashboard from './pages/Dashboard';
import DesignLanguage from './pages/DesignLanguage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<CaseStudyExhibition />} />
        <Route path="/landing" element={<LandingPage />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/design-language" element={<DesignLanguage />} />
      </Routes>
    </Router>
  );
}

export default App;
