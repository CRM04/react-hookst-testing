import React from 'react'
import PropTypes from 'prop-types';

const TodoListItem = ({ todo, i, tooGle, handleRemove }) => {
    return (
        <>
            <li key={todo.id} className="list-group-item  d-flex  justify-content-between align-items-center" onClick={() => tooGle(todo.id)}>
                <p className={`todoDesc ${todo.done && 'completado'} `}>{i + 1}.{todo.desc}</p>
                <button type="button" className="btn-close" onClick={() => handleRemove(todo.id)} aria-label="Close"></button>
            </li>
        </>
    )
}

TodoListItem.propTypes = {
    todo: PropTypes.object.isRequired,
    i: PropTypes.number.isRequired,
    tooGle: PropTypes.func.isRequired,
    handleRemove: PropTypes.func.isRequired
}

export default TodoListItem
