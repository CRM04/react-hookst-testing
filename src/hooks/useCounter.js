import { useState } from "react"
import PropTypes from 'prop-types';

const useCounter = (initialState = 10) => {
    const [counter, setstate] = useState(initialState);

    const increment = () => {
        setstate(counter + 1)
    }

    const decrement = () => {
        setstate(counter - 1)
    }

    const reset = () => {
        setstate(initialState);
    }

    return { counter, increment, decrement, reset }
}

useCounter.propTypes = {
    initialState: PropTypes.number
}

export default useCounter
