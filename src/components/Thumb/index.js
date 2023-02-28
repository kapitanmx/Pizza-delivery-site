import React from 'react';
//Styles
import { Wrapper, Content } from './Thumb.styles';
// Components
import Button from '../Button';

const Thumb = ({title, desc, price, img, link}) => (
    <Wrapper imgUrl={img}>
        <Content>
            <div>
                <h3>{title}</h3>
                <p>{desc}</p>
                <h4>{price}</h4>
            </div>
            <Button text='Sprawdź' isLink={true} link={link} />
        </Content>
    </Wrapper>
);

export default Thumb;