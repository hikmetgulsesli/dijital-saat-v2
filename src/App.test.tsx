import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import App from './App'

describe('App', () => {
  it('renders the app', () => {
    render(<App />)
    expect(document.querySelector('.app')).toBeInTheDocument()
  })

  it('displays the logo', () => {
    render(<App />)
    expect(screen.getByText('CHRONOS')).toBeInTheDocument()
  })

  it('displays date in Turkish format', () => {
    render(<App />)
    const dateElement = document.querySelector('.date-text')
    expect(dateElement).toBeInTheDocument()
  })

  it('displays time', () => {
    render(<App />)
    const timeDisplay = document.querySelector('.time-display')
    expect(timeDisplay).toBeInTheDocument()
  })

  it('displays timezone', () => {
    render(<App />)
    expect(screen.getByText('İstanbul, TR (GMT+3)')).toBeInTheDocument()
  })

  it('displays metric cards', () => {
    render(<App />)
    expect(screen.getByText('Hava')).toBeInTheDocument()
    expect(screen.getByText('Alarm')).toBeInTheDocument()
    expect(screen.getByText('24°C')).toBeInTheDocument()
    expect(screen.getByText('07:30')).toBeInTheDocument()
  })

  it('displays bottom navigation', () => {
    render(<App />)
    expect(screen.getByText('Dijital')).toBeInTheDocument()
    expect(screen.getByText('Analog')).toBeInTheDocument()
    expect(screen.getByText('Ayarlar')).toBeInTheDocument()
  })

  it('has active state on Dijital nav item', () => {
    render(<App />)
    const digitalNav = screen.getByText('Dijital').closest('.nav-item')
    expect(digitalNav).toHaveClass('active')
  })
})
