import styled from 'styled-components';

export const Wrapper = styled.button`
    margin: 0 auto;
    width: 25%;
    border: 2px solid var(--white);
    color: var(--black);
    background: var(--white);
    border-radius: 25px;
    outline: none;
    transition: ease-in 0.3s;
    a {
        text-decoration: none;
        color: var(--black);
    }
    @media screen and (max-width: 768px) {
        width: 50vw;
        margin: 0 60px;
    }
`;