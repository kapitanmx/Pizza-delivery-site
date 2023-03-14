import React, {useState, useContext} from 'react';
// API
import API from '../API';
// Params
import { useParams } from 'react-router-dom';
// Components
import Section from './Section';
import OrderInfo from './OrderInfo';
// Context
import { Context } from '../Context';

const OrderStatus = () => {
    const [state, setState] = useState({});
    const [error, setError] = useState(false);
    const { orderId } = useParams(); 
    const [user] = useContext(Context);

    const fetchOrder = async () => {
        try {
            setError(false);
            const order = await API.fetchOrder(user.sessionId, orderId);
            setState(order);
            return;
        } catch (error) {
            setError(true);
            return;
        }
    }
    fetchOrder();

    return (
        <>
            <OrderInfo />
        </>
    );
}

export default OrderStatus;