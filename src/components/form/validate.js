
export const validate = values => {
    let errors = {};

    if(values.username.trim() === ''){
        errors.username = 'Username cannot be empty';
    }
    if(values.email.trim() === ''){
        errors.email = 'Email cannot be empty';
    }
    if(values.password.trim() === ''){
        errors.password = 'Password cannot be empty';
    }

    return errors;
}