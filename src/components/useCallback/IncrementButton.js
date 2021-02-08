import React from 'react'

const IncrementButton = React.memo(({ increment }) => {
    console.log('increment button called');
    return (
        <>
            <button className="btn btn-outline-dark" onClick={increment}> increment </button>
        </>
    )
})

export default IncrementButton
