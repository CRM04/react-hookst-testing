import React, { useEffect, useReducer } from 'react';
import { todoReducer } from './todoReducer';
import TodoList from './TodoList'
import TodoForm from './TodoForm'

import './ToDo.css';

const ToDo = () => {

    const init = () => {
        return JSON.parse(localStorage.getItem('todos')) || [];
    }

    const [todos, dispatch] = useReducer(todoReducer, [], init)

    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(todos));
    }, [todos])



    const handleRemove = (id) => {
        console.info(id)
        const action = {
            type: 'remove',
            payload: { id }
        }
        dispatch(action)
    }

    const tooGle = (id) => {
        dispatch({ type: 'toogle', payload: id })
    }

    const handleAdd = (action) => {
        dispatch(action)
    }

    return (
        <div className="container mt-5">
            <div className="row">
                <div className="col text-center">
                    <h3>ToDo List ({todos.length}) </h3>
                </div>
                <hr />
            </div>
            <div className="row justify-content-center">
                <div className="col-6">
                    <TodoForm handleAdd={handleAdd} />
                </div>
            </div>
            <div className="row justify-content-center">
                <div className="col-8 text-center">
                    <TodoList todos={todos} tooGle={tooGle} handleRemove={handleRemove} />
                </div>
            </div>
        </div >
    )
}

export default ToDo
