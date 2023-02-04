import React from 'react';
// Styles
import { Wrapper, Content } from './Hero.styles';

const Hero = ({title, subtitle, text}) => (
    <Wrapper>
        <Content>
            <div>
                <h1>{title}</h1>
            </div>
            <div>
                <h2>{subtitle}</h2>
                <p>{text}</p>
            </div>
        </Content>
    </Wrapper>
);

export default Hero;