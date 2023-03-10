import styled from 'styled-components';

export const Wrapper = styled.div`
    width: 100%;
    margin: 0 auto;
    background: ${({img}) => img};
    background-size: cover;
    background-repeat: no-repeat;
`;

export const Content = styled.div`
    width: 100%;
    max-width: var(--maxWidth);
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    margin: 0 auto;
    padding: 200px 0;
    border-radius: 20px;
    color: var(--white);
    div {
        margin: 0 50px;
        padding: 15px;
    }
`;