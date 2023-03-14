import React, {useState, useEffect, useContext} from "react";
import { useNavigate } from 'react-router-dom';
import API from '../API';
// Components
import Section from './Section';
import Button from './Button';
import Thumb from './Thumb';
import Grid from './Grid';
// Context
import { Context } from '../Context';
// ProductContext
import { ProductContext } from "../ProductContext";
// Hooks
import { useOrderFetch } from '../hooks/useOrdersFetch';
// Helpers
import { calcPrice } from '../helpers'

const Cart = ({ orderId }) => {
    const [user] = useContext(Context);
    const [error, setError] = useState(false);
    const [product] = useContext(ProductContext);
    const [data, setData] = useState([]);

    const ordersPrice = calcPrice(data);
    const deliveryPrice = 10;
    const totalPrice = calcPrice(data) + deliveryPrice;

    useEffect(() => {
        setData(...product);
    }, [])

    const navigate = useNavigate();

    const handleOrder = async(
    ) => {
        try {
            setError(false);
            await API.makeOrder(
                user.sessionId,
                data,
                ordersPrice,
                deliveryPrice,
                totalPrice
            );
            navigate(`/${orderId}`)
        } catch (error) {
            setError(true);
        }
    }
    return (
        <>
            <Grid title="Zamówienia">
                {data.map(product => (
                    <Thumb
                       key={product._id}
                       productId={product._id}
                       title={product.title}
                       desc={product.desc}
                       price={product.price}
                       img={product.imgs[0]}
                       clickable  
                    />
                ))}
            </Grid>
            <Section>
                <h3>Koszt zamówienia: {ordersPrice} zł</h3>
                <h3>Dostawa: {deliveryPrice} zł</h3>
                <h2>Całkowity koszt: {totalPrice} zł</h2>
                <Button text="Złóż zamówienie" callback={handleOrder}/>
            </Section>
        </>
    );
}

export default Cart;