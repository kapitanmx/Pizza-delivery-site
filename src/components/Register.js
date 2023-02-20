import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import API from '../API';

import Button from './Button';

import { Wrapper } from './Register.styles';

const Register = () => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [phone, setPhone] = useState('');
    const [street, setStreet] = useState('');
    const [houseNumber, setHouseNumber] = useState('');
    const [postalCode, setPostalCode] = useState('');
    const [city, setCity] = useState('');

    const [error, setError] = useState(false);

    const navigate = useNavigate();

    const handleSubmit = async () => {
        try {
            setError(false);
            await API.register(
                firstName,
                lastName,
                email,
                password,
                phone,
                street,
                houseNumber,
                postalCode,
                city
            );
        } catch (error) {
            setError(true);
            navigate('/');
        }
    }

    const handleInput = e => {
        const name = e.currentTarget.name;
        const value = e.currentTarget.value;
        if (name === 'first name') setFirstName(value);
        if (name === 'last name') setLastName(value);
        if (name === 'email') setEmail(value);
        if (name === 'password') setPassword(value);
        if (name === 'phone') setPhone(value);
        if (name === 'street') setStreet(value);
        if (name === 'house number') setHouseNumber(value);
        if (name === 'postal code') setPostalCode(value);
        if (name === 'city') setCity(value);
    }

    return (
        <Wrapper>
            <form>
                {error && <div className="error">Error</div>}
                <input 
                    type='first name'
                    value={firstName}
                    name='first name'
                    onChange={handleInput}
                />
                <input 
                    type='last name'
                    value={lastName}
                    name='last name'
                    onChange={handleInput}
                />
                <input 
                    type='email'
                    value={email}
                    name='email'
                    onChange={handleInput}
                />
                <input 
                    type='password'
                    value={password}
                    name='password'
                    onChange={handleInput}
                />
                <input 
                    type='phone'
                    value={phone}
                    name='phone'
                    onChange={handleInput}
                />
                <input 
                    type='street'
                    value={street}
                    name='street'
                    onChange={handleInput}
                />
                <input 
                    type='house number'
                    value={houseNumber}
                    name='house number'
                    onChange={handleInput}
                />
                <input 
                    type='postal code'
                    value={postalCode}
                    name='postal code'
                    onChange={handleInput}
                />
                <input 
                    type='city'
                    value={city}
                    name='city'
                    onChange={handleInput}
                />
                <Button text='Zarejestruj się' callback={handleSubmit}/>
            </form>
        </Wrapper>
    );
}

export default Register;