import React, {useContext} from 'react';
// Components
import Section from './Section';
import Login from './Login';
import Register from './Register';
import UserInfo from './UserInfo'
// Context
import { Context } from '../Context';

const UserPanel = () => {
    // const [user] = useContext(Context);

    // if (user.sessionId) {
    //     return (
    //         <UserInfo user={user}/>
    //     );
    // }
    return (
        <Section>
            <Login />
            <Register />
        </Section>
    );
}

export default UserPanel;