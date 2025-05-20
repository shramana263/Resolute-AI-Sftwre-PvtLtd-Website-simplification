import { createRoot } from 'react-dom/client'
import './index.css'
import Home from './app/Home.tsx'
import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import RootLayout from './app/Layout.tsx'
import About from './app/about/About.tsx'
import NotFound from './app/NotFound.tsx'
import StartPage from './app/home/StartPage.tsx'
import MortgageCalculator from './app/calculator/MortgageCalculator.tsx'

createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <RootLayout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/calculator" element={<MortgageCalculator />} />
          <Route path="/start" element={<StartPage />} />
          <Route path="/about" element={<About />} />
          
          <Route path="*" element={<NotFound />} />
        </Routes>
      </RootLayout>
    </BrowserRouter>
  </React.StrictMode>,
)
