import useCounter from '../../hooks/useCounter';
import React from 'react'

const CounterCustomHook = () => {
    // const initialState = 100;
    const { state, increment, decrement, reset } = useCounter();
    const factor = 2;

    return (
        <>
            <div className="row m-2">
                <div className="col-6">
                    <h3> Counter: {state} </h3>
                </div>
                <div className="col-6">
                    <button className="btn btn-primary m-2" onClick={() => increment(factor)}> + {factor} </button>
                    <button className="btn btn-primary m-2" onClick={() => decrement(factor)}> - {factor} </button>
                    <button className="btn btn-primary m-2" onClick={reset}> reset </button>
                </div>
                <hr />
            </div>
        </>
    )
}

export default CounterCustomHook
