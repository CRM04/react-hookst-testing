import React, { useState } from 'react'
import useCounter from '../../hooks/useCounter';
import Number from './Number'

const Memorize = () => {
    const { counter, increment } = useCounter(0);
    const [show, setshow] = useState(true);

    return (
        <div className="container bg-light mt-3 p-3 rounded">
            <h1> Memo example function {JSON.stringify(show)} </h1>
            <hr />
            <h2>Counter: <Number counter={counter} /> </h2>
            <hr />
            <button className="btn btn-outline-dark mr-2" onClick={increment} > + 1 </button>
            <button className="btn btn-outline-dark ml-2" onClick={() => setshow(!show)} > show/hide </button>
        </div>
    )
}


export default Memorize
