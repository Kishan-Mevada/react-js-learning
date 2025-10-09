import React from 'react'
import { useEffect } from 'react';
import { useRef } from 'react';
import { useState } from 'react'

const Timer = () => {

    const [count, setCount] = useState(0);
    const interval = useRef(null);

    useEffect(() => {

        interval.current = setInterval(() => {
            setCount((prevCount) => prevCount + 1);
        }, 1000);

        return () => {
            clearInterval(interval.current);
        }

    }, [])

  return (
    <div>
        <h2>Timer: {count} seconds</h2>
        <button onClick={() => clearInterval(interval.current)}>Stop Timer</button>
    </div>
  )
}

export default Timer