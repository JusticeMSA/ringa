import {useState} from 'react';

export const useForm = (callback, initialValues = {}, validate) => {
    const [values, setValues] = useState(initialValues);
    const [erros, setErrors] = useState({});

    const onChange = e => {
        setValues({...values,[e.target.name] : [e.target.value]});
    }

    const onSubmit = e => {
        e.preventDefault();

        //Validate returns error object, i'm just checking if theres errors
        if(Object.keys(validate(values).length) === 0){ 
            callback();
            setValues(initialValues);
            setErrors({})
        } else {
                setErrors(validate.values)
        }
    }
    return{
        onChange,
        onSubmit,
        erros,
        values
    }
}