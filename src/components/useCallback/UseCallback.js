import React, { useState, useCallback } from 'react'
import IncrementButton from './IncrementButton'

const UseCallback = () => {
    const [counter, setcounter] = useState(0)

    /* const increment = () => {
        setcounter( counter + 1);
    } */

    const increment = useCallback(
        () => {
            setcounter(c => c + 1)
        },
        [setcounter],
    );

    return (
        <div className="container mt-2">
            <h2>UseCallback example Hook</h2>
            <hr />
            <h4>Counter {counter}</h4>
            <IncrementButton increment={increment} />
        </div>
    )
}

export default UseCallback
