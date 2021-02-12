import React from 'react'
import { useForm } from '../../hooks/useForm';

const TodoForm = ({ handleAdd }) => {

    const [{ description }, handleInput, reset] = useForm({
        description: ''
    });

    const handleSubmit = (e) => {
        e.preventDefault();

        const action = {
            type: 'add',
            payload: {
                id: new Date().getTime(),
                desc: description,
                done: false
            }
        }

        handleAdd(action)
        reset()
    }

    return (

        <div className="card border-light mb-3 shadow-sm p-3 mb-5 bg-body rounded">
            <div className="card-header">Task Form</div>
            <div className="card-body">
                <div className="card-text">
                    <form onSubmit={handleSubmit}>
                        <div className="d-grid gap-2">
                            <div className="form-floating mb-3">
                                <input type="text" autoComplete='off'
                                    name="description" value={description}
                                    onChange={handleInput} className="form-control" placeholder="I have to..." />
                                <label >Task name</label>
                            </div>
                            <button className="btn btn-dark">Add</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>

    )
}

export default TodoForm
