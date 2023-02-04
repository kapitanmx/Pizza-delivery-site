import styled from 'styled-components';

export const Wrapper = styled.button`
    margin: 20px auto;
    width: 25%;
    height: 50px;
    border: 2px solid var(--black);
    color: var(--black);
    background: var(--white);
    border-radius: 20px;
    outline: none;
    transition: ease-in 0.3s;
    :hover {
        background: linear-gradient(90deg, rgba(131,58,180,1) 0%, rgba(252,69,97,1) 50%, rgba(199,152,64,1) 96%);
        border: none;
    }
`;