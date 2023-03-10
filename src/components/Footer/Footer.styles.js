import styled from 'styled-components';

export const Wrapper = styled.div`
    width: 100%;
    margin: 0 auto;
    padding: 20px;
    background: var(--medGrey);
    text-align: center;
    p {
        margin: 0 auto;
        padding: 20px;
        color: var(--white);
    }
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
        h2, h3, a {
            color: var(--white);
        }
        a {
            text-decoration: none;
        }
    }
    @media screen and (max-width: 960px) {
        flex-direction: column;
    }
`;