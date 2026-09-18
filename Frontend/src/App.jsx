import { useState } from 'react'
import CheckInPage from './pages/CheckInPage'
import DashboardPage from './pages/DashboardPage'
import './App.css'

function App() {
  const [currentPage, setCurrentPage] = useState('check-in')
  const [mood, setMood] = useState('')
  const [energy, setEnergy] = useState('')

  if (currentPage === 'dashboard') {
    return <DashboardPage mood={mood} energy={energy} onMoodChange={setMood} onEnergyChange={setEnergy} />
  }

  return <CheckInPage mood={mood} energy={energy} onMoodChange={setMood} onEnergyChange={setEnergy} onContinue={() => setCurrentPage('dashboard')} />
}

export default App
