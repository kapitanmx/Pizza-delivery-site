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
                        <h3>{child.title}</h3>
                        <p>{child.info}</p>
                        <a href={`/${child.link}`}>{child.linkTitle}</a>
                    </div>
                ))}
                <p>© {currentYear()} Mikołaj Wołoszyn</p>
            </Content>
        </Wrapper>
    )
};

export default Footer;