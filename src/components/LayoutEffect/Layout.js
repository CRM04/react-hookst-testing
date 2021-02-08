import React, { useLayoutEffect, useRef, useState } from 'react'
import { useFetch } from '../../hooks/useFetch';
import useCounter from '../../hooks/useCounter';
import './layout.css'

const Layout = () => {
    const { counter, increment } = useCounter(1);
    const { data } = useFetch(`https://www.breakingbadapi.com/api/quotes/${counter}`);
    const { quote } = !!data && data[0];
    const p = useRef();
    const [sizeP, setsizeP] = useState({});

    useLayoutEffect(() => {
        console.log('layout Effect')
        setsizeP(p.current.getBoundingClientRect());
    }, [quote]);

    return (
        <div className="container mt-5">
            <h2> Layout Effect Hook</h2>
            <hr />

            <blockquote className="blockquote">
                <p ref={p}>{quote}</p>
            </blockquote>
            <pre>
                { JSON.stringify(sizeP, null, 3) }
            </pre>
            <button className="btn btn-primary" onClick={increment}>Next quote</button>
        </div>
    )
}

export default Layout
