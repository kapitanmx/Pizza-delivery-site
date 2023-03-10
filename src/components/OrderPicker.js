import React, {useState, useContext} from "react";
// Components
import Section from './Section';
import Button from './Button';
// Context
import { Context } from '../Context';

const OrderPicker = ({product}) => {
    const [user] = useContext(Context);
    const [data, setData] = useState([]);
    return (
        <Section>
            <h2>Złóż zamówienie</h2>
        </Section>
    );
}

export default OrderPicker;