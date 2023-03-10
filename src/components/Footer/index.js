import React from 'react';
// Styles
import { Wrapper, Content } from './Footer.styles';

const Footer = ({info}) => {
    const currentYear = () => {
        const date = new Date().getFullYear();
        return date.toString()
    }
    return (
        <Wrapper>
            <Content>
                {info.map((child) => (
                    <div>
                        <h2>{child.title}</h2>
                        <h3>{child.info}</h3>
                        <a href={`/${child.link}`}>{child.linkTitle}</a>
                    </div>
                ))}
            </Content>
            <p>© {currentYear()} Mikołaj Wołoszyn</p>
        </Wrapper>
    )
};

export default Footer;