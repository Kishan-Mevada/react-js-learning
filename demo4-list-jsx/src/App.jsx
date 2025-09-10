import {useState} from 'react'
import './App.css'
import UserList from "./components/UserList.jsx";
import ProductList from "./components/ProductList.jsx";

function App() {
  const [count, setCount] = useState(0)

  return (
   <div>
        <UserList />
        <ProductList />
   </div>
  )
}

export default App
