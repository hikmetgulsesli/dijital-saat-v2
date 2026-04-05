import { useState, useEffect } from 'react'
import { DigitalClock } from './components/DigitalClock'
import './App.css'

function App() {
  const [time, setTime] = useState(new Date())

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date())
    }, 1000)
    return () => clearInterval(timer)
  }, [])

  return (
    <div className="app">
      <div className="bg-gradient-right"></div>
      <div className="bg-gradient-left"></div>
      <header className="top-app-bar">
        <span className="logo">CHRONOS</span>
        <div className="header-actions">
          <button className="icon-button" aria-label="Ayarlar">
            <span className="material-symbols-outlined">settings</span>
          </button>
        </div>
      </header>
      <main className="main-content">
        <DigitalClock time={time} />
      </main>
      <nav className="bottom-nav">
        <div className="nav-container">
          <button className="nav-item active" aria-label="Dijital">
            <span className="material-symbols-outlined">digital_watch</span>
            <span className="nav-label">Dijital</span>
          </button>
          <button className="nav-item" aria-label="Analog">
            <span className="material-symbols-outlined">schedule</span>
            <span className="nav-label">Analog</span>
          </button>
          <button className="nav-item" aria-label="Ayarlar">
            <span className="material-symbols-outlined">settings</span>
            <span className="nav-label">Ayarlar</span>
          </button>
        </div>
      </nav>
    </div>
  )
}

export default App
