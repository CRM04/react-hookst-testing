import React, { useRef } from 'react';

const FocusScreen = () => {

    const inputRef = useRef()

    const handleClick = () => {
        inputRef.current.select();
    }

    return (
        <div className="container mt-3">
            <h3>UseRef - Focus screen</h3>
            <hr />
            <input type="text" ref={inputRef} className="form-control" />
            <button type="button"  className="btn btn-outline-primary mt-3" onClick={handleClick}> set focus </button>
        </div>
    );
}

export default FocusScreen
