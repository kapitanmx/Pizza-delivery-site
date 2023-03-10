import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import API from '../API';

import { Wrapper } from './Login.styles';

import { Context } from '../Context';

import Button from './Button';


const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(false);

    const [_user, setUser] = useContext(Context);
    const navigate = useNavigate();

    const handleSubmit = async () => {
        setError(false);
        try {
            const reqToken = await API.getReqToken();
            const sessionId = await API.login(
                reqToken,
                email,
                password
            );
            setUser({ sessionId: sessionId.session_id, email });
            navigate('/');
        } catch (error) {
            setError(true);
        }
    };

    const handleInput = e => {
        const name = e.currentTarget.name;
        const value = e.currentTarget.value;

        if (name === 'email') setEmail(value);
        if (name === 'password') setPassword(value);
    };

    return (
        <Wrapper>
            {error && <div className='error'>There was an error!</div>}
            <label>Email:</label>
            <input
                type='email'
                value={email}
                name='username'
                onChange={handleInput}
            />
            <label>Hasło:</label>
            <input
                type='password'
                value={password}
                name='password'
                onChange={handleInput}
            />
            <Button text='Zaloguj się' callback={handleSubmit} />
        </Wrapper>
    );
}

export default Login