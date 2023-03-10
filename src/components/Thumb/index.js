import React from 'react';
import { Link } from 'react-router-dom';
//Styles
import { Wrapper, Content } from './Thumb.styles';
// Components
import Button from '../Button';

const Thumb = ({productId, title, desc, price, img, clickable}) => (
    <Wrapper>
        {clickable ? (
            <Link to={`/${productId}`}>
                <Content>
                    <img src={img} />
                    <div>
                        <h2>{title}</h2>
                        <p>{desc}</p>
                    </div>
                </Content>
            </Link>
        ) : (
            <Content>
                <img src={img} />
                <div>
                    <h2>{title}</h2>
                    <p>{desc}</p>
                </div>
            </Content>
        )}
    </Wrapper>
);

export default Thumb;