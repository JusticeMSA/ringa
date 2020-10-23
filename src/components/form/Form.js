import React from 'react';
import './form.scss';

//I need to know which path rendered the form
import {useLocation} from 'react-router-dom';

import {useForm} from '../../customHooks/useForm';
import {validate} from './validate';

const Form = () => {

    let locationInfo = useLocation();
    let location = locationInfo.pathname;
    let currentProcess = location.substring(1).toUpperCase();

    const sendToFirebase = () => {
        console.log('you can now send to firebase');
    }

    const {onChange, onSubmit, errors, values} = useForm(sendToFirebase, {username: '',email: '', password: ''}, validate);

    return(
        <form className='form' onSubmit= {onSubmit}>
            <p>
                {values.email}
            </p>
            <h5>{currentProcess}</h5>
            {
                currentProcess === 'REGISTER' ?
                (<input type='text' name='username' placeholder='Username'/>) :
                ''
            }
            <span>{errors.username}</span>
            <input onChange={onChange} type='email' name='email' placeholder='Email' />
            <span>{errors.email}</span>
            <input onChange={onChange} type='password' name='password' placeholder='Password' />
            <span>{errors.password}</span>
            <button onChange={onChange} type='submit'>{currentProcess}</button>
        </form>
    );
}

export default Form;