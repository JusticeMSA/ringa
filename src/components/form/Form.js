import React from 'react';
import './form.scss';

//I need to know which path rendered the form
import {useLocation} from 'react-router-dom';

const Form = () => {

    let locationInfo = useLocation();
    let location = locationInfo.pathname;
    let currentProcess = location.substring(1).toUpperCase();


    return(
        <form className='form'>
            <h5>{currentProcess}</h5>
            {
                currentProcess === 'REGISTER' ?
                (<input type='text' name='name' placeholder='Username'/>) :
                ''
            }
            <span></span>
            <input type='email' name='email' placeholder='Email' />
            <span></span>
            <input type='password' name='password' placeholder='Password' />
            <span></span>
            <button type='submit'>{currentProcess}</button>
        </form>
    );
}

export default Form;