import React from 'react'
import { useFetch } from '../../hooks/useFetch';
import useCounter from '../../hooks/useCounter';


const MultipleCustomHooks = () => {
    const { counter, increment } = useCounter(1);
    console.log(counter);
    const { loading, data } = useFetch(`https://www.breakingbadapi.com/api/quotes/${counter}`);
    const { author, quote } = !!data && data[0];

    const loadingDiv = (<div className="alert alert-primary text-center" role="alert">
        <div className="spinner-border spinner-border-sm text-primary" role="status">
            <span className="visually-hidden">Loading...</span>
        </div>
                            Loading...
    </div>);
    return (
        <div className="container mt-5">
            <h2>Best BreakingBad Quotes</h2>
            <hr />
            { loading ? loadingDiv : (
                <figure className="text-end">
                    <blockquote className="blockquote">
                        <p>{quote}</p>
                    </blockquote>
                    <figcaption className="blockquote-footer">
                        {author}
                    </figcaption>
                </figure>
            )}

            <button className="btn btn-primary" onClick={increment}>Next quote</button>
        </div>
    )
}

export default MultipleCustomHooks
