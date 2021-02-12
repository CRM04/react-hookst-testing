import React from 'react'
import TodoListItem from './TodoListItem';
import PropTypes from 'prop-types';

const TodoList = ({ todos, tooGle, handleRemove}) => {
    return (
        <>
            {
                todos.length > 0 ?
                    <ul className="list-group">
                        {
                            todos.map((todo, i) => <TodoListItem key={todo.id} todo={todo} i={i} tooGle={tooGle} handleRemove={handleRemove} />)
                        }
                    </ul>
                    : <h3 className="noTask"> It seems you are free today</h3>
            }
        </>
    )
}


TodoList.propTypes = {
    todos: PropTypes.array.isRequired,
    tooGle: PropTypes.func.isRequired,
    handleRemove: PropTypes.func.isRequired
}

export default TodoList
