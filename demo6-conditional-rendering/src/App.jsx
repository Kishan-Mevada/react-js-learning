import './App.css'
import Weather from "./components/Weather.jsx";
import UserStatus from "./components/UserStatus.jsx";
import DayGreetings from "./components/DayGreetings.jsx";

function App() {

  return (
    <section>
        <Weather temp={13} />
        <hr />
        <UserStatus loggedIn={true} isAdmin={true} />
        <hr />
        <UserStatus loggedIn={true} isAdmin={false} />
        <hr />
        <DayGreetings timeOfDay='morning' />
    </section>
  )
}

export default App
