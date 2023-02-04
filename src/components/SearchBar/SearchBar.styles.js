import styled from 'styled-components';

export const Wrapper = styled.div`
    width: 100%;
    max-width: var(--maxWidth);
    margin: 0 auto;
`;

export const Content = styled.div`
    padding: 20px;
    margin: 0 auto;
    display: flex;
    flex-direction: row;
    button {

    }
    input {
        width: 50%;
        background: var(--lightGrey);
        color: var(--black);
        outline: none;
        margin: 0 auto;
        padding: 15px;
        border-radius: 20px;
    }
`;
