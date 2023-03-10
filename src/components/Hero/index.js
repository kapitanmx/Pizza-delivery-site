import React from 'react';
// Components
import Button from '../Button';
// Styles
import { Wrapper, Content } from './Hero.styles';

const Hero = ({title, subtitle, text, button, background}) => (
    <Wrapper img={background}>
        <Content>
            <div>
                <h1>{title}</h1>
            </div>
            <div>
                <h2>{subtitle}</h2>
            </div>
            {button}
        </Content>
    </Wrapper>
);

export default Hero;