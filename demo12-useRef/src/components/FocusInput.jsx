import React from 'react'
import { useRef } from 'react'

const FocusInput = () => {

    const inputElement = useRef(null);

    const focusOn = () => {
        if(inputElement.current) {
            inputElement.current.focus();
        }
    }

  return (
    <div>
        <input type='text' ref={inputElement}/>
        <button onClick={focusOn}>Focus & Write</button>
    </div>
  )
}

export default FocusInput