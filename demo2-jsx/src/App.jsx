import {useState} from 'react'
import './App.css'
import Welcome from "./components/WelcomeMessage.jsx";
import Rules from "./components/JSXRules.jsx";

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
        <Welcome />
        <Rules />
    </>
  )
}

export default App
