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
    input {
        width: 50%;
        background: var(--lightGrey);
        color: var(--black);
        font-size: 1rem;
        margin: 0 auto;
        padding: 20px;
        border: 0px solid;
        border-radius: 25px;
        :focus {
            outline: none;
        }
        @media screen and (max-width: 768px) {
            width: 100%;
        }
    }
`;
