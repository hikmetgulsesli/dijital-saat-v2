import { useState, useEffect } from 'react'
import { AnalogClock, Settings, useClockTypePreference } from './components'
import './App.css'

function App() {
  const [time, setTime] = useState(new Date())
  const [clockType, setClockType] = useClockTypePreference()

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date())
    }, 1000)
    return () => clearInterval(timer)
  }, [])

  const formatTime = (date: Date) => {
    return date.toLocaleTimeString('tr-TR', { hour12: false })
  }

  const formatDate = (date: Date) => {
    return date.toLocaleDateString('tr-TR', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    }).toUpperCase()
  }

  return (
    <div className="app">
      <header className="app-header">
        <div className="app-title">CHRONOS</div>
        <div className="header-actions">
          <button className="icon-button" aria-label="Geçmiş">
            <span className="material-symbols-outlined">history</span>
          </button>
          <Settings clockType={clockType} onClockTypeChange={setClockType} />
        </div>
      </header>

      <main className="app-main">
        {clockType === 'digital' ? (
          <div className="digital-view">
            <div className="time">{formatTime(time)}</div>
            <div className="date">{formatDate(time)}</div>
          </div>
        ) : (
          <div className="analog-view">
            <AnalogClock time={time} />
            <div className="date-display">
              <h2 className="date-title">{formatDate(time)}</h2>
              <div className="location-info">
                <span className="location">İstanbul</span>
                <div className="dot"></div>
                <span className="timezone">GMT +3</span>
              </div>
            </div>
          </div>
        )}
      </main>

      <nav className="bottom-nav">
        <div className="nav-container">
          <button 
            className={`nav-item ${clockType === 'digital' ? 'active' : ''}`}
            onClick={() => setClockType('digital')}
          >
            <span className="material-symbols-outlined">schedule</span>
            <span className="nav-label">Dijital</span>
          </button>
          <button 
            className={`nav-item ${clockType === 'analog' ? 'active' : ''}`}
            onClick={() => setClockType('analog')}
          >
            <span className="material-symbols-outlined">watch</span>
            <span className="nav-label">Analog</span>
          </button>
          <button className="nav-item">
            <span className="material-symbols-outlined">settings</span>
            <span className="nav-label">Ayarlar</span>
          </button>
        </div>
      </nav>
    </div>
  )
}

export default App
