import React from 'react';
// Styles
import { Wrapper, Content } from './Section.styles';

const Section = ({content}) => (
    <Wrapper>
        <Content>
            {content}
        </Content>
    </Wrapper>
);

export default Section;