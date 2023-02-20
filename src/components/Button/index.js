import React from 'react';
import { Wrapper } from './Button.styles';

const Button = ({text, callback, type, link}) =>{
    (type === "link") ? (
        <Wrapper>
            <a href={link}>
                {text}
            </a>
        </Wrapper>
    ) : (
        <Wrapper onClick={callback}>
            {text}
        </Wrapper>
    );
}

export default Button;