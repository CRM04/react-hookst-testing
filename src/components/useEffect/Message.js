import React, { useEffect, useState } from 'react'

const Message = () => {

    const [state, setState] = useState({ x: 0, y: 0 });

    const museMove = ({ x, y }) => {
        setState({ x, y });
    }
    const { x, y } = state;

    useEffect(() => {
        window.addEventListener('mousemove', museMove)
        return () => {
            console.log('component unmounted')
            window.removeEventListener('mousemove', museMove)
        }
    }, []);

    return (
        <div>
            <h3>Hey, your mouse coords are x:{x} - y:{y}</h3>
        </div>
    );
}

export default Message
