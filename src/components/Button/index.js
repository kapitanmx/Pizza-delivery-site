import React from 'react';
import { Wrapper } from './Button.styles';

const Button = ({text, callback, type, link}) => (type === "link") ? 
    (
        <Wrapper>
            <a href={link}>
                <p>{text}</p>
            </a>
        </Wrapper>
    ) : (
        <Wrapper onClick={callback}>
            <p>{text}</p>
        </Wrapper>
    );


export default Button;