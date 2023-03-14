import styled from 'styled-components';

export const Wrapper = styled.div`
    width: 100%;
    margin: 0 auto;
`;

export const Content = styled.div`
    max-width: var(--maxWidth);
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    margin: 0 auto;
    padding: 20px;
    h1, h2, h3, p {
        color: var(--black);
    }
`;

