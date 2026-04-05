import './DigitalClock.css'

interface DigitalClockProps {
  time: Date
}

export function DigitalClock({ time }: DigitalClockProps) {
  const formatHours = (date: Date) => {
    return date.toLocaleTimeString('tr-TR', { hour12: false, hour: '2-digit' })
  }

  const formatMinutes = (date: Date) => {
    return date.toLocaleTimeString('tr-TR', { hour12: false, minute: '2-digit' })
  }

  const formatSeconds = (date: Date) => {
    return date.toLocaleTimeString('tr-TR', { hour12: false, second: '2-digit' })
  }

  const formatDate = (date: Date) => {
    return date.toLocaleDateString('tr-TR', {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    }).toUpperCase()
  }

  return (
    <div className="digital-clock" data-testid="digital-clock">
      {/* Ambient Light Effect */}
      <div className="ambient-light"></div>
      
      {/* Date Display */}
      <div className="date-display">
        <span className="date-text" data-testid="date-text">{formatDate(time)}</span>
      </div>

      {/* Digital Time Readout */}
      <div className="time-container">
        <h1 className="time-display" data-testid="time-display">
          <span className="time-glow">{formatHours(time)}</span>
          <span className="time-separator">:</span>
          <span className="time-glow">{formatMinutes(time)}</span>
          <span className="time-seconds">{formatSeconds(time)}</span>
        </h1>
        
        {/* Timezone */}
        <div className="timezone-badge" data-testid="timezone-badge">
          <span className="material-symbols-outlined">public</span>
          <span className="timezone-text">İstanbul, TR (GMT+3)</span>
        </div>
      </div>

      {/* Weather/Metric Overlay */}
      <div className="metrics-grid">
        <div className="metric-card" data-testid="metric-card">
          <div>
            <p className="metric-label">Hava</p>
            <p className="metric-value">24°C</p>
          </div>
          <span className="material-symbols-outlined metric-icon">partly_cloudy_day</span>
        </div>
        <div className="metric-card" data-testid="metric-card">
          <div>
            <p className="metric-label">Alarm</p>
            <p className="metric-value">07:30</p>
          </div>
          <span className="material-symbols-outlined metric-icon">alarm</span>
        </div>
        <div className="metric-card hidden-mobile" data-testid="metric-card">
          <div>
            <p className="metric-label">Pil</p>
            <p className="metric-value">88%</p>
          </div>
          <span className="material-symbols-outlined metric-icon">battery_charging_80</span>
        </div>
      </div>
    </div>
  )
}

export default DigitalClock
