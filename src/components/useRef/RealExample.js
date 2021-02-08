import React, { useState } from 'react'
import MultipleCustomHooks from '../MutipleCustomHooks.js/MultipleCustomHooks'

const RealExample = () => {

    const [show, setShow] = useState(false);

    const Qoutes = <>
        <div className="m-1 bg-light p-2 rounded">
            <MultipleCustomHooks />
        </div>
        <hr />
    </>;

    return (
        <div className="container mt-2">
            <h1> UseRef real example</h1>
            <hr />
            { show && Qoutes }
            <button className="btn btn-secondary mt-3" onClick={ () => setShow( !show ) }  > { show ? 'Hide': 'Show' } </button>
        </div>
    )
}

export default RealExample
