import React from 'react'

const Number = React.memo(({ counter }) => {

    console.log('Number component called')
    return (
        <small>  { counter} </small>
    )
})

export default Number
