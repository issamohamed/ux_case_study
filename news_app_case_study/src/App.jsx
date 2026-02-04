import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Exhibition from './pages/Exhibition'
import LandingPage from './pages/LandingPage'
import ArticlePage from './pages/ArticlePage'
import DesignLanguage from './pages/DesignLanguage'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Exhibition />} />
      <Route path="/landing" element={<LandingPage />} />
      <Route path="/article" element={<ArticlePage />} />
      <Route path="/design-language" element={<DesignLanguage />} />
    </Routes>
  )
}

export default App
