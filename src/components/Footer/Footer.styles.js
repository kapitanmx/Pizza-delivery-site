import styled from 'styled-components';

export const Wrapper = styled.div`
    max-width: var(--maxWidth);
    margin: 0 auto;
    padding: 20px;
    background: var(--medGrey);
`;

export const Content = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    flex-wrap: wrap;
    margin: 0 auto;
    padding: 5px;
    div {
        margin: 0 auto;
        padding: 20px;
    }
    @media screen and (max-width: 960px) {
        flex-direction: column;
    }
`;