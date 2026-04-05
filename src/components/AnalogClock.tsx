import './AnalogClock.css'

interface AnalogClockProps {
  time: Date
}

export function AnalogClock({ time }: AnalogClockProps) {
  const seconds = time.getSeconds()
  const minutes = time.getMinutes()
  const hours = time.getHours()

  // Calculate angles for clock hands
  const secondAngle = seconds * 6 // 360 / 60 = 6 degrees per second
  const minuteAngle = minutes * 6 + seconds * 0.1 // 6 degrees per minute + smooth movement
  const hourAngle = (hours % 12) * 30 + minutes * 0.5 // 30 degrees per hour + smooth movement

  return (
    <div className="analog-clock" data-testid="analog-clock">
      <svg viewBox="0 0 400 400" className="clock-svg">
        {/* Outer Ring */}
        <circle
          cx="200"
          cy="200"
          r="190"
          fill="none"
          stroke="#23293c"
          strokeWidth="1"
          opacity="0.3"
        />
        
        {/* Hour Markers */}
        <g stroke="#909097" strokeLinecap="round" strokeWidth="2" opacity="0.4">
          <line x1="200" y1="20" x2="200" y2="40" />
          <line x1="200" y1="360" x2="200" y2="380" />
          <line x1="20" y1="200" x2="40" y2="200" />
          <line x1="360" y1="200" x2="380" y2="200" />
        </g>
        
        {/* Sub-markers */}
        <g stroke="#909097" strokeLinecap="round" strokeWidth="1" opacity="0.2">
          <line x1="290" y1="44" x2="300" y2="61" />
          <line x1="356" y1="110" x2="339" y2="100" />
          <line x1="356" y1="290" x2="339" y2="300" />
          <line x1="290" y1="356" x2="300" y2="339" />
          <line x1="110" y1="356" x2="100" y2="339" />
          <line x1="44" y1="290" x2="61" y2="300" />
          <line x1="44" y1="110" x2="61" y2="100" />
          <line x1="110" y1="44" x2="100" y2="61" />
        </g>
        
        {/* Hour Hand */}
        <line
          x1="200"
          y1="200"
          x2="200"
          y2="120"
          stroke="#dce1fb"
          strokeWidth="6"
          strokeLinecap="round"
          transform={`rotate(${hourAngle} 200 200)`}
        />
        
        {/* Minute Hand */}
        <line
          x1="200"
          y1="200"
          x2="200"
          y2="70"
          stroke="#c6c6cd"
          strokeWidth="4"
          strokeLinecap="round"
          transform={`rotate(${minuteAngle} 200 200)`}
        />
        
        {/* Second Hand */}
        <line
          x1="200"
          y1="220"
          x2="200"
          y2="50"
          stroke="#2fd9f4"
          strokeWidth="2"
          strokeLinecap="round"
          transform={`rotate(${secondAngle} 200 200)`}
        />
        
        {/* Center Pivot */}
        <circle cx="200" cy="200" r="6" fill="#2fd9f4" />
        <circle cx="200" cy="200" r="2" fill="#0c1324" />
      </svg>
    </div>
  )
}

export default AnalogClock
