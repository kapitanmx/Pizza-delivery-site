import React, {useContext} from 'react';
// Styles
import {Wrapper, Content} from './UserInfo.styles';
// Components
import Thumb from '../Thumb';
// Context
import { Context } from '../../Context';

const UserInfo = ({user}) => {
    return (
        <Wrapper>
            <Content>
                <h1>Panel użytkownika</h1>
                <h1>{user.name} {user.last_name}</h1>
                <h2>Adres email: {user.email}</h2>
                <h3>Telefon: {user.phone}</h3>
                <h3>Ulica: {user.street}</h3>
                <h3>Numer Domu / Mieszkania: {user.house_number}</h3>
                <h3>Kod pocztowy: {user.postal_code}</h3>
                <h3>Miasto: {user.city}</h3>
            </Content>
        </Wrapper>
    );
}

export default UserInfo;

