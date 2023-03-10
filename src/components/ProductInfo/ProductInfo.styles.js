import styled from 'styled-components'

export const Wrapper = styled.div`
    width: 100%;
    margin: 0 auto;
    background-color: rgba(0, 0, 0, 0.5);
`;

export const Content = styled.div`
    max-width: var(--maxWidth);
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    flex-wrap: wrap;
    margin: 0 auto;
    padding: 20px;
    background: var(--white);
    border-radius: 25px;
    overflow: scroll;
    :-webkit-scrollbar {
        width: 10px;
        height: 12px;
    }
    :-webkit-scrollbar-track {
        border: 1px solid var(--medGrey);
        border-radius: 10px;
    }
    :-webkit-scrollbar-thumb {
        background: var(--medGrey);
        border-radius: 10px;
    }
    :-webkit-scrollbar-thumb:hover {
        background: var(--darkGrey);
    }
    img {
        width: 100%;
        border-radius: 20px;
        object-fit: cover;
        height: 200px;
        margin: 0 auto;
    }

    div {
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        margin: 0 auto;
        padding: 10px;
    }

`;
