import React from 'react'
import { useForm } from '../../hooks/useForm';

const FormWithCustomHook = () => {

    const [ formValues, handleInput] = useForm({email: '', name: '', password: ''});

    const { email, name, password } = formValues;

    return (
        <div className="container mt-3">
            <form>
                <div className="form-floating mb-3">
                    <input type="email" name="email" className="form-control" placeholder="name@example.com" value={email} onChange={handleInput} />
                    <label htmlFor="floatingInput">Email address</label>
                </div>
                <div className="form-floating mb-3">
                    <input type="text" name="name" className="form-control" placeholder="Name" value={name} onChange={handleInput} />
                    <label htmlFor="floatingInput">Name</label>
                </div>
                <div className="form-floating mb-3">
                    <input type="password" name="password" className="form-control" placeholder="Name" value={password} onChange={handleInput} />
                    <label htmlFor="floatingInput">Name</label>
                </div>
            </form>
        </div>
    );
}

export default FormWithCustomHook
