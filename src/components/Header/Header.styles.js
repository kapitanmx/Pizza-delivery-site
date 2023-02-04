import styled from 'styled-components';

export const Wrapper = styled.div`
    width: 100%;
    max-width: var(--maxWidth);
    margin: 0 auto;
    padding: 10px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    position: fixed;
    z-index: 5;
    border-bottom: ${({isScrolled}) => isScrolled ? '1px solid var(--lightGrey)' : 'none'};
    :before, :after {
        box-sizing: border-box;
        -webkit-font-smoothing: antialiased;
    }
    @media screen and (max-width: 768px) {
        padding: 10px;
    }
`;

export const Content = styled.div`
    width: 40%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    flex-wrap: wrap;
    margin: 40px auto;
    padding: 0 20px;
    a {
        text-decoration: none;
        color: var(--black);
    }
    @media screen and (max-width: 900px) {
        display: none;
    }
`;

export const LinkButton = styled.div`
    color: ${({isScrolled}) => isScrolled ? '#000' : 'white'};
    @media screen and (max-width: 900px) {
        color: var(--white);
        align-self: left;
    }
`;

export const MobileMenu = styled.div`
    display: none;
    flex-direction: column;
    justify-content: center;
    background: #5047B5;
    color: white;
    transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(-100%)'};
    height: 100vh;
    padding: 20rem 2rem;
    position: absolute;
    top: 0;
    left: 0;
    transition: transform 0.3s ease-in-out;
    width: 100%;
    @media screen and (max-width: 900px) {
        display: flex;
    }

    a {
        font-size: 2rem;
        text-transform: uppercase;
        padding: 2rem 0;
        font-weight: bold;
        letter-spacing: 0.5rem;
        color: #0D0C1D;
        text-decoration: none;
        transition: color 0.3s linear;
    }

    &:hover {
      color: #343078;
    }
`;

export const Burger = styled.div`
    display: none;
    flex-direction: column;
    justify-content: space-around;
    width: 2rem;
    height: 2rem;
    background: transparent;
    border: none;
    cursor: pointer;
    margin: 10px 10px;
    padding: 0;
    z-index: 5;

    @media screen and (max-width: 900px) {
        display: flex;
    }

    &:focus {
        outline: none;
    }

    div {
        width: 2rem;
        height: 0.20rem;
        background: ${({ open }) => open ? 'white' : 'black'};
        transition: all 0.3s linear;
        position: relative;
        transform-origin: 1px;

    :first-child {
        transform: ${({ open }) => open ? 'rotate(45deg)' : 'rotate(0)'};
    }

    :nth-child(2) {
        opacity: ${({ open }) => open ? '0' : '1'};
        transform: ${({ open }) => open ? 'translateX(20px)' : 'translateX(0)'};
    }

    :nth-child(3) {
        transform: ${({ open }) => open ? 'rotate(-45deg)' : 'rotate(0)'};
    }
  }
`;

export const Icon = styled.img`
    width: 100%;
    height: auto;
`;


export const Img = styled.img`
    display: block;
    align-self: left;
    margin: 0 auto;
    width: 15%;
    height: auto;
    @media screen and (max-width: 768px) {
        width: 50%;
        margin: 0;
    }
`;