import styled from 'styled-components';

export const Wrapper = styled.div`
    width: 100%;
    margin: 0 auto;
`;

export const Content = styled.div`
    width: 100%;
    max-width: var(--maxWidth);
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin: 0 auto;
    padding: 20px;
    h1, h2, h3, h4, h5, h6, p {
        padding: 15px;
        color: var(--black);
    }
`;

