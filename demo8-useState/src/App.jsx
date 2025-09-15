import './App.css'
import Counter from "./components/Counter.jsx";
import TodoList from "./components/TodoList.jsx";
import Profile from "./components/Profile.jsx";
import ShoppingList from "./components/ShoppingList.jsx";

function App() {

  return (
    <>
        <Counter />
        <hr />
        <TodoList />
        <hr />
        <Profile />
        <hr />
        <ShoppingList />
    </>
  )
}

export default App
