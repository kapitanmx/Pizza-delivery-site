import React from 'react';
// Styles
import { Wrapper, Content } from './OrderInfo.styles';
// Components
import Thumb from '../Thumb';
import StatusBar from '../StatusBar';

const OrderInfo = ({header, summaryDetails, deliveryTime, orders}) => {
    return (
        <Wrapper>
            <Content>
                <h1>{header}</h1>
                <h2>{summaryDetails}</h2>
                <h2>{deliveryTime}</h2>
                <StatusBar />  
                {orders.map(order => (
                    <Thumb
                        key={order._id}
                        productId={order._id}
                        title={order.title}
                        desc={order.desc}
                        price={order.price}
                        img={order.img[0]}
                        clickable
                    />
                ))}
            </Content>
        </Wrapper>
    );
}
 
export default OrderInfo;