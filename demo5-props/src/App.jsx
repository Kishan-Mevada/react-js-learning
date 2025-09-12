import './App.css'
import Person from "./components/Person.jsx";
import Product from "./components/Product.jsx";
import GreetingCard from "./components/GreetingCard.jsx";

function App() {

    return (
        <div>
            <Person name='Kishan' age={28}/>
            <Product name={'Apple MacBook Pro M4 Pro'}  price={'$2699'} />
            <GreetingCard>
                <hr />
                <h1>To: Kishan</h1>
                <p>Happy Learning React JS Kishan!</p>
            </GreetingCard>
            <GreetingCard>
                <hr />
                <h1>To: Niki</h1>
                <p>Happy Learning React JS Niki!</p>
            </GreetingCard>
        </div>
    )
}

export default App
