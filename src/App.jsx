import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Landing from './pages/Landing'
import Dashboard from './pages/Dashboard'
import ChallengeDay from './pages/ChallengeDay'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Preloader from './components/Preloader'
import FluidInkTrail from './components/FluidInkTrail'

export default function App() {
  return (
    <div className="app-root">
      <Preloader />
      <FluidInkTrail />
      {/* Global Animated Liquid Glass & Electric Techie Background */}
      <div className="liquid-bg-container" aria-hidden="true">
        <div className="liquid-mesh" />
        <div className="liquid-tech-circuits" />
        <div className="liquid-code-column code-column-left">
          <span>{`{ }`}</span>
          <span className="code-green">{`git push origin main`}</span>
          <span>{`console.log("🔥")`}</span>
          <span>{`async ( ) =>`}</span>
          <span className="code-green">{`status: 200 OK`}</span>
          <span>{`import { AI }`}</span>
          <span>{`return <App />`}</span>
          <span className="code-green">{`01001101`}</span>
          <span>{`{ } < > //`}</span>
        </div>
        <div className="liquid-code-column code-column-right">
          <span>{`{ } < > //`}</span>
          <span className="code-green">{`const streak = 60 🔥`}</span>
          <span>{`function build()`}</span>
          <span className="code-green">{`npm run dev 🚀`}</span>
          <span>{`await fetch()`}</span>
          <span>{`export default`}</span>
          <span className="code-green">{`AI_MODEL = "Claude"`}</span>
          <span>{`try { ship() }`}</span>
          <span>{`✨ ABTalks`}</span>
        </div>
        <div className="liquid-orb liquid-orb-1" />
        <div className="liquid-orb liquid-orb-2" />
        <div className="liquid-orb liquid-orb-green" />
        <div className="liquid-orb liquid-orb-3" />
        <div className="liquid-orb liquid-orb-4" />
      </div>

      <Navbar />
      <main className="page-container">
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/day/12" element={<ChallengeDay />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}
