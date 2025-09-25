import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { UserProvider } from './components/UserContext'
import UserProfile from './components/UserProfile'
import UpdateUser from './components/UpdateUser'

function App() {
  const [count, setCount] = useState(0)

  return (
    <UserProvider>
      <UserProfile />
      <UpdateUser />
    </UserProvider>
  )
}

export default App
