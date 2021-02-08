import React, { useState, useMemo } from 'react'
import useCounter from '../../hooks/useCounter';
import { procesoPesado } from '../../helpers/procesoPesado';


const Memorize = () => {
    const { counter, increment } = useCounter(5000);
    const [show, setshow] = useState(true);
    
    const memorizedFn = useMemo( () => procesoPesado(counter), [counter]);

    return (
        <div className="container bg-light mt-3 p-3 rounded">
            <h1> useMemo hook example function {JSON.stringify(show)} </h1>
            <hr />
            <h2>Counter: {counter} </h2>
            { memorizedFn }
            <hr />
            <button className="btn btn-outline-dark mr-2" onClick={increment} > + 1 </button>
            <button className="btn btn-outline-dark ml-2" onClick={() => setshow(!show)} > show/hide </button>
        </div>
    )
}


export default Memorize
