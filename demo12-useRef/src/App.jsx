import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import FocusInput from './components/FocusInput'
import Timer from './components/Timer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <><FocusInput /><Timer /></>
  )
}

export default App
