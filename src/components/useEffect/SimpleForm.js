import { useEffect, useState } from 'react'
import Message from './Message'

const SimpleForm = () => {

    const [formState, setFormState] = useState({
        name: '',
        email: ''
    });

    const { name, email } = formState;

    const handleInput = ({ target }) => {
        setFormState({ ...formState, [target.name]: target.value });
    }

    useEffect(() => {
        console.log('initial change')
    }, []);

    useEffect(() => {
        console.log('form changed')
    }, [formState]);

    useEffect(() => {
        console.info('email changed')
    }, [email]);

    return (
        <div className="container mt-3" >
            <div className="row">
                <div className="col">
                    <h2>UseEffect Hook</h2>
                </div>
            </div>
            <hr />
            <div>
                <p>
                    This hooks trigger a function when one, or several of  it's arguments have changed
                </p>
            </div>
            <form>
                <div className="form-floating mb-3">
                    <input type="email" name="email" className="form-control" placeholder="name@example.com" value={email} onChange={handleInput} />
                    <label htmlFor="floatingInput">Email address</label>
                </div>
                <div className="form-floating mb-3">
                    <input type="text" name="name" className="form-control" placeholder="Name" value={name} onChange={handleInput} />
                    <label htmlFor="floatingInput">Name</label>
                </div>
            </form>
            { (name === '123' && <Message />)}
        </div>
    );
}

export default SimpleForm
