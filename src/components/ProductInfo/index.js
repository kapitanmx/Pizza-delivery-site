import React, {useState, useContext} from 'react';
import API from '../../API';
import Button from '../Button'
// Styles
import { Wrapper, Content } from './ProductInfo.styles';
import { API_KEY } from '../../config';
// Product Context
import { ProductContext } from '../../ProductContext';

const ProductInfo = ({ product }) => {
    const [_data, setData] = useContext(ProductContext);
    const handleSubmit = () => {
        setData(product);
        return;
    }
    return (
        <Wrapper>
            <Content>
                <h1>{product.name}</h1>
                <div>
                    <p>{product.desc}</p>
                    <p>{product.est_prep_time}</p>
                </div>
                {product.imgs.map(image => (
                    <img src={image} alt=''/>
                ))}
                <Button text="Dodaj do koszyka" callback={handleSubmit}/>
            </Content>
        </Wrapper>
    );
}

export default ProductInfo;