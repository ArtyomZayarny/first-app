import React, {useState} from 'react';
import {useDispatch} from 'react-redux';
import {login} from '../../auth/slices/currentUser'
import { useCallback } from 'react';

const LoginPage = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const dispatch = useDispatch();
    const submitForm = useCallback( (e) => {
        e.stopPropagation();
        e.preventDefault();
        dispatch(login({email,password}))
    },[email,password])

    return(
        <div className="login-app">
            <form onSubmit={submitForm}>
                <div>Login Form</div>
                <input type="text" value={email} onChange={ e => setEmail(e.target.value)} />
                <input type="password" value={password} onChange={ e => setPassword(e.target.value)} />
                <input type="submit" />
            </form>
        </div>
    )
}

export default LoginPage