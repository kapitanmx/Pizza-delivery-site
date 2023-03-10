import styled from 'styled-components';

export const Wrapper = styled.div`
    max-width: var(--maxWidth);
    margin: 0 auto;
    padding: 30px;

    h1 {
        color: var(--black);

        @media screen and (max-width: 768px) {
            font-size: var(--fontBig);
        }
    }
`;

export const Content = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 2fr));
    grid-gap: 2rem;
`;