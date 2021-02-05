import {useState} from 'react';

export const useForm = (initialState) => {
    const [values, setFormValues] = useState(initialState);

    const handleInput = ({ target }) => {
        console.log(target)
        setFormValues({ ...values, [target.name]: target.value });
    }

    return [values, handleInput];

}
