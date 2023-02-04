import styled from 'styled-components';

export const Wrapper = styled.div`
    width: 100%;
    height: 30vw;
    margin: 0 auto;
    background: ${({isImage}) => isImage ? `url('/' + ${({imgUrl}) => imgUrl})` : 'var(--black)'}
    background-size: cover;
    background-repeat: no-repeat;
`;

export const Content = styled.div`
    width: 100%;
    max-width: var(--maxWidth);
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin: 0 auto;
    padding: 20px;
    background-color: rgba(0, 0, 0, 0.4); 
    border-radius: 20px;
    color: var(--white);
    div {
        margin: 0 auto;
        padding: 15px;
    }
`;