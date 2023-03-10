import styled from 'styled-components';

export const Wrapper = styled.div`
    width: 100%;
    max-width: var(--maxWidth);
    display: flex;
    flex-direction: column;
    margin: 0 auto;
    border-radius: 20px;
    transition: all 1s;
    a {
        text-decoration: none;
        color: var(--black);
    }
    :hover {
        -webkit-box-shadow: 1px 1px 24px 0px rgba(66, 68, 90, 1);
        -moz-box-shadow: 1px 1px 24px 0px rgba(66, 68, 90, 1);
        box-shadow: 1px 1px 24px 0px rgba(66, 68, 90, 1);
    }
    @media screen and (max-width: 768px) {
        -webkit-box-shadow: 1px 1px 24px 0px rgba(66, 68, 90, 1);
        -moz-box-shadow: 1px 1px 24px 0px rgba(66, 68, 90, 1);
        box-shadow: 1px 1px 24px 0px rgba(66, 68, 90, 1);
    }
`;

export const Content = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    div {
        margin: 0;
        padding: 20px;
        p {
            display: -webkit-box;
            text-overflow: ellipsis;
            overflow: hidden;
            -webkit-box-orient: vertical;
            -webkit-line-clamp: 3;
        }
    }
    img {
        width: 100%;
        border-radius: 20px 20px 0 0;
        object-fit: cover;
        height: 200px;
    }
`;