import React, { useReducer, useState } from 'react'
import { counterReducer, initialState } from './CounterReducer'

const Counter = () => {
    const [state, dispatch] = useReducer(counterReducer, initialState)
    const [inputValue, setInputValue] = useState(0);

    const updateBy = (actionType) => {
        dispatch({ type: actionType, payload: +inputValue });
        setInputValue(0);
    }

  return (
    <div>
        <button onClick={() => dispatch({ type : '+'})}>+</button>
        <button onClick={() => dispatch({ type: '-'})}>-</button>
        <button onClick={() => dispatch({ type: 'reset'})}>Reset</button>
        <h1>Count: {state.count}</h1>

        <input type='number' 
        value={inputValue} 
        placeholder='Increment By' 
        onChange={(e) => setInputValue(e.target.value)}/>

        <button onClick={() => updateBy('incrementBy')}>Add By</button>
        <button onClick={() => updateBy('decrementBy')}>Subtract By</button>
    </div>
  )

}

export default Counter