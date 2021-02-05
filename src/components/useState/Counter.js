import { useState } from 'react';
import './counter.css';

const Counter = () => {

    const [state, setState ] = useState({
        counter1: 10,
        counter2: 20,
        counter3: 122,
        counter4: 182
    });

    const { counter1, counter2 } = state;

return (
    <div className="row">
        <div className="col-6">
            <h1>
                Counter 1: {counter1}
            </h1>
            <button className="btn btn-primary" onClick={ () => setState({...state, counter1: counter1 + 1})}>+</button>
        </div>
        <div className="col-6">
            <h1>
                Counter 2: {counter2}
            </h1>
            <button className="btn btn-primary" onClick={ () => setState({...state, counter2: counter2 + 2}) }>+</button>
        </div>
    </div>
);
}

export default Counter
